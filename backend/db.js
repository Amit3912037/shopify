const mongoose = require('mongoose');

async function connectToMongo() {
 await mongoose.connect('mongodb://localhost:27017/connectedDB',()=>{
      console.log("connected successfully");

  });
  
}

module.exports=connectToMongo;