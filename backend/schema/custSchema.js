const mongoose = require('mongoose');
// const mongoose =require('mongoose');
const custSchema = mongoose.Schema({


    cust_name: {
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

// export default mongoose.model("Cust", custSchema);

module.exports = mongoose.model("Cust", custSchema)