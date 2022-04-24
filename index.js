const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//user name: dbuser1
// password: LAOu8p6CBTWrT7Xp



const uri = "mongodb+srv://dbuser1:LAOu8p6CBTWrT7Xp@cluster0.mncuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const usersCollection = client.db("foodExpress").collection("users");
        // const user = { name: 'Angelina Jolie', email: 'angelina@gmail.com' };
        // const result = await usersCollection.insertOne(user);
        // console.log(`User inserted with id:${result.insertedId}`)


        //get users
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = usersCollection.find(query)
            const users = await cursor.toArray();
            res.send(users);
        })

        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        //POST user: add a new user
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await usersCollection.insertOne(newUser);
            res.send(result)
        });
        //delete a user
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});
app.listen(port, () => {
    console.log('CRUD Server is running');
})