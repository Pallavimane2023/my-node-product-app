const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true
    },
    role:{
        type:String,
        required:true,
        enum:['Admin','User',"Manager"]
    }
},{
    timestamps:true,
})

const User = mongoose.model('User',userSchema);

module.exports = User;
