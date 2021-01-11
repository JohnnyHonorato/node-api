const mongoose = require('mongoose')

const URI = 'mongodb+srv://johnny:D85knCxu9uTO4aXn@cluster0.hws9h.mongodb.net/test?retryWrites=true&w=majority'

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("bd deu certo");
};

module.exports = connectDB;