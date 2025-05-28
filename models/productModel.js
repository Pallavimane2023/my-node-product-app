const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type:String,
        requied:[true,"Please enter product name"]
    },
    quntity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    image:{
        type:String,
        required:false,
    }
    
},{
    timestamps: true
})


const Product = mongoose.model('Product',productSchema);

module.exports = Product;