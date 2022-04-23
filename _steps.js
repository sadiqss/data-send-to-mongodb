/**
 * 1. npm init -y
 * 2. npm i express cors mongodb
 * 3. edit the script as
 *  "scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 * 4. npm run star-dev
* 5. index.js
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