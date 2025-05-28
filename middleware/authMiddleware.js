const jwt = require('jsonwebtoken');

const verifyToken =(req,res,next)=>{
let token;
const authHeader = req.headers.Authorization || req.headers.authorization
if(!authHeader){
    return res.status(400).json({message:"no token access denied"});
}
if(authHeader){
    token = authHeader.split(' ')[1];
    console.log(token,"token")
    if(!token){
        return res.status(400).json({message:"no token access denied"});
    }
}
// const token = req.cookies.token; // step4 Get the token from the cookie
//   if (!token) {
//     return res.sendStatus(401); // Unauthorized
//   }
try{
    const decode = jwt.verify(token,"jwt_scret_key");
    req.user = decode;
    console.log('decoded user',req.user);
    next();

}catch(err){
    console.log(err);
    res.status(500).json({message:"Internal Server Error"});
}



jwt.verify(token,"jwt_scret_key")

}

module.exports = verifyToken;