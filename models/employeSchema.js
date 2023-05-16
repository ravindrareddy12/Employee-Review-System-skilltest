const mongoose = require('mongoose')

const employeeSchema= new mongoose.Schema({
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
    },
    performance:{
        type:Number,
        require:true
    },
    roles:{
        type:String,
        required:true
    },
    reviews:{
        type:String,
        
    }
},{
    timestamps:true
})

const Employee = mongoose.model('Employee',employeeSchema)

module.exports= Employee