const express = require('express');
const bodyParser = require('body-parser');
const custRoutes = require('./routes/cust.js');
const farmRoutes = require('./routes/farm.js');
const mongoose = require('mongoose');

//  import bodyParser from 'body-parser';
// import connectToMongo from './db';
// import cors from 'cors';
// var corsv = cors()
var cors = require('cors');


const mongoURI = "mongodb://localhost:27017/m90?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected");
    })
}
connectToMongo();


const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use('/customer', custRoutes);
app.use('/farm', farmRoutes);
app.get('/', (req, res) => {
    // console.log('[TEST]!');
    res.send('Hello from Homepage')
});
app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));
