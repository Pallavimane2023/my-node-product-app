const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoute');
//const cookieParser = require('cookie-parser'); // step1 use cookieParser when you want to passs and store token through cookie
const cors = require('cors');

const app = express();


app.use(cors({
    origin: 'http://localhost:3001',
   // credentials: true, // step2: Allow only requests from this origin
  }));
app.use(express.json());
//app.use(cookieParser()); step3 use cookie parser
app.use("/api/auth",authRoutes);
app.use("/api/user", productRoutes);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to mongodb")

    app.listen(3000,()=>{
        console.log("app is running on port 3000")
    })
}
)

