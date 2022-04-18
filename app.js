
const express = require('express')
// const mongoose = require('mongoose')

// 

const app = express();


const ipfs = require('./routes/routes.js')
app.use('/ipfs',ipfs);


//   mongoose.connect(process.env.mongoURI,()=> {
//       console.log('mongoose connected')
//   })const dotenv = require('dotenv')
// dotenv.config();
 
 
app.listen(5000,( ) => {
    console.log('server running at port 5000')
});


