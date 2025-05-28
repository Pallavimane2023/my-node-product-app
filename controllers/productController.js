const Product = require('../models/productModel');


const addProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
        }catch(error){
        console.log(error)
        }
        
};

const getProducts = async(req,res)=>{
    try{
         const product = await Product.find({});
         res.status(200).json(product);
        
        }catch(error){
          console.log(error)
        }
       
};

const getProductById = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).json({message:"Product not found for given Id"});
        }
        res.status(200).json(product);
        }catch(error){
        console.log(error)
        }
        
};

const updateProductById = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message:"Product not found for given Id"});
        }
        const updatedProduct =await Product.findById(id);
        res.status(200).json(updatedProduct);
        }catch(error){
        console.log(error)
        }

};

const deleteProductById = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:"Product not found for given Id"});
        }
        res.status(200).json(product);
        }catch(error){
        console.log(error)
        }
}

module.exports = {
    getProducts,addProduct,getProductById,updateProductById,deleteProductById
}