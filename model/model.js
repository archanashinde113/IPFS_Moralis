const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type : String
    },
   
    fileHash: {
        type : String
    },
    imageURL: 
    {
        type: String
    }
},
{timestamps:true}
) 

module.exports = mongoose.model('ipfs', imageSchema)

