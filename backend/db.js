import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/m90?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected");
    })
}

module.exports = connectToMongo;