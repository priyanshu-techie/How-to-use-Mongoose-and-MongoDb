const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/userRecord', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MongoDB')) // no callbacks used now, instead use promise or async await
.catch(err=>console.error('Could not connect to MongoDB',err));

const userModel=require('./userSchema.js');

run();
async function run(){
    try{
    //FIND BY ID
        // let user=await userModel.findById('6447bbd0724da2370f75bee5');
    //GENERAL FIND 
    // let user=await userModel.find({name:'abhi'});
    // let user=await userModel.findOne({name:'abhi'});
    // let user=await userModel.exists({name:'abhi'});
    // let user=await userModel.findByIdAndDelete('6447bbd0724da2370f75bee5');
    // let user=await userModel.deleteOne({
    //     name:'abhi'  // first thing that matches will be deleted
    // });


//using WHERE 👇👇 for adding extra conditions for the queue

    let user=await userModel.find({ name:'abhi' }).
    where('address.city').equals('ranchi').
    where('age').gt(17).lt(66).               // gt=greater than lt=less than
    where('hobies').in(['coding']).
    limit(10).
    sort('age');
//YOU CAN USE "where" WITHOUT "find" AS WELL 


    // we can use .select('age') for getting only age.

    console.log(user);
    user[0].sayHi(); // user defined method i created .
    }
    catch(e){
        console.error(e);
    }
}