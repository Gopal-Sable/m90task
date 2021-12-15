const mongoose = require('mongoose');
const farmSchema = mongoose.Schema({

    farm_name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },

    message: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }


});

module.exports = mongoose.model("Farm", farmSchema)