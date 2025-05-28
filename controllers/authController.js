const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async(req,res)=>{
    try{
        console.log(req.body,"hh")
const {username,password,role} = req.body;
const hashedPassword = await bcrypt.hash(password,10);
const newUser = new User({username,password:hashedPassword,role});
await newUser.save();
res.status(200).json({message:`User registered successfully with username ${username}`})
    }catch(error){
        res.status(500).json({message:`something went worong ${error}`})
    }

};


const login =async(req,res)=>{
   try{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({message:`User not found with username ${username}`});
    }
    const matchPassword = await bcrypt.compare(password,user.password);
    if(!matchPassword){
        return res.status(400).json({message:`Invalid crendentials`});
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role
    },'jwt_scret_key',{expiresIn:"1h"})
    
    res.status(200).json({token});
    // res.cookie("token",token,{  // step5 set token in response cookie make secure false if using http 
    //     httpOnly:true,
    //     secure:false,  
    //     maxAge: 3600000,
    // })
    res.status(200).json({message:"Login succesfully"})
   }catch(error){
    res.status(500).json({message:`something went wrong ${error}`})

   }
};


module.exports={
    register,login
}