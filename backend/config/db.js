import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ayushsakhale98:9dzgIXDTEf8kOpVM@cluster0.m39dpdq.mongodb.net/railway-food-delivery').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.