
const mongoose=require('mongoose')

// import validator
const validator=require('validator')

// create an obj for mongoose

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },

    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('Invalid Email')
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})


// to store the schema using mongoose
// model name and collection name in mongo db should be same

const users=new mongoose.model('users',userSchema)
// modelname=(collectionname,schemavariable)
module.exports=users