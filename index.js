const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
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

}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});
app.listen(port, () => {
    console.log('CRUD Server is running');
})