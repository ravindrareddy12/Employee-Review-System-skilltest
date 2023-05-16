const mongoose = require('mongoose')

const adminCreationSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
   
},{
    timestamps:true
})

const Admins = mongoose.model('Admins',adminCreationSchema)

module.exports= Admins