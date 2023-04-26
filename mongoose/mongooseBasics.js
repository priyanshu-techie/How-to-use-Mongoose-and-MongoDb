// Connecting with MongoDb

const mongoose=require('mongoose');
//mongodb has deprecated(consided obsolete and not advised to use)👇👇 their old url parser hence saying to use new parser, and use new topology
mongoose.connect('mongodb://localhost:27017/userRecord', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MongoDB')) // no callbacks used now, instead use promise or async await
.catch(err=>console.error('Could not connect to MongoDB',err));

// importing the users model
const userModel=require('./userSchema.js'); // model is where you can use all mongodb functions+ many extra funtions 


// go here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// go to 8:00 at mongoose vid of WDS for how to create new user


run();
async function run(){
//for creating a new user 👇👇
    // const newUser=await userModel.create({name:'jijaji',age:22,email:"random@rem.com",phoneNumber:79288789})
    
// for updating a data 👇👇   
    // const user2=await userModel.create({name:'jijaji',age:22,email:"random@rem.com",phoneNumber:79288789})
    // user2.name="sailesh";
    // user2.save();

// just trying 🧑‍💻🧑‍💻
    try{
        const user=await userModel.create({
            name:'abhi',age:'20',email:'funkyabhi@x.com',hobies:['coding','gyming'],address:{
                street:'dhurwa', city:'ranchi',pin:835300
            }
        })
        console.log(user);
    }
    catch(e){
        console.log(`not saved error => ${e}!!`);
    }

 
}