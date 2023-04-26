let mongoose=require('mongoose');

let addressSchema=new mongoose.Schema({
    street:String,
    city:String,
    pin:Number
})

let userSchema=new mongoose.Schema({
    name:{
        type:String,// if i give a different data then it will give error
        requrired:true
    },
    age:{
        type:Number,
        min:1,
        max:120
    },
    email:{
        type:String,
        lowercase:true
    },
    phoneNumber:Number,
    dateCreated:{
        type:Date,
        default:()=>{Date.now()}, // if i give Date.now  as default, first time the code runs will be saved all the time, instead run a function that saves the current time .
        immutable:true
    },
    bestFriend:mongoose.Schema.Types.ObjectId,
    hobies:[String],
    // address:{
    //     street:String,
    //     city:String,
    //     pin:Number
    // }
    address:addressSchema
})

// you can also define your own functions for your model
userSchema.methods.sayHi=function(){
    console.log(`Hello ${this.name} I Priyanshu, welcomes you!!`);
}

//👇👇exporting the model
module.exports=mongoose.model("users",userSchema);
//                            👆👆 users is the name of the collection

//A Mongoose model is a wrapper of the Mongoose schema.
//A Mongoose schema defines the document's properties, default values, types of data, validators, etc. 
//In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.
//All mongodb core functions you have with a model.🔥🔥
// go here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// go to 8:00 at mongoose vid of WDS for how to create new user


