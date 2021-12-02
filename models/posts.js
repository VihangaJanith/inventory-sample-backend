const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    itemid:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
    

});
module.exports = mongoose.model('Post', postSchema);