const mongoose = require('mongoose');
const modelSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true,
        unique:true,
    },
    Password: {
        type: String,
        require: true
    },
    ProfileImg: {
        type: String
    },
    // Devicetoken: {
    //     type: String
    // }
})

const UserModel = mongoose.model('UserDetails', modelSchema);
module.exports = UserModel;