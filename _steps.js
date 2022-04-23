/**
 * 0. create folder 
 * 1. npm init -y
 * 2. npm i express cors mongodb
 * 3. edit the script as
 *  "scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 * 4.create index.js 
* 5. npm run star-dev
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});
app.listen(port, () => {
    console.log('CRUD Server is running');
})
 */

/**
 * ----------------
 * Create Atlas Account
 * ------------------
 * 1. sign up
 * 2.create cluster
 * 3.create dbuser and password
 * 4. Network access-->ip address allow all
 * 5. database> connect> code copy
 * 
 * ----------------
 * crud operation
 * -------------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. create async function
 * ----------------
 * Integrate sending data from client to server
 * -------------------------------
 * 1. Client side: create form
 * 2. on submit get form data and create user object
 * 3. on server: Create user POST method to receive data on the backend
 * 4. on client side: set fetch with POST,headers,body
 * 5. Make sure you return a json from the POST API
 */