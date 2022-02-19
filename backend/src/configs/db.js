const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://store:store123@cluster0.zwoxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}