const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/temporary');
        console.log("db connected");
        const kitSonSchema=new mongoose.Schema({
            name:String,
            mother:ObjectId,
            age:Number
        })
        const kittySchema = new mongoose.Schema({
            name: String,
            children:[kitSonSchema]
        });

        const Kitten = mongoose.model('Kitten', kittySchema);
        const Kitbab= mongoose.model('KitBaby',kitSonSchema);
// creating a sub document,


    // const newKit =await Kitten.create({name:"preeti",chilren:[]})
    
    // const newKitBab=await Kitbab.create({name:'mew',mother:newKit.id,age:1});

    // console.log(newKit);
    // newKit.children.push(newKitBab);
    // newKit.save();
        
// Second method
        // const newKit=new Kitten({name:'preeti',children:[]});
        // const newBab=new Kitbab({name:'mew',mother:newKit.id,age:1});

        // newKit.children.push(newBab);

        // newKit.save();

// adding few more childrens
        // const kitpar= await Kitten.findById("649184b0aa588bbfd2b0cf07");
        // const newNewBab=new Kitbab({name:'mewmew',mother:kitpar.id,age:3})

        // kitpar.children.push(newNewBab);
        // kitpar.save();
        
        

    }
    catch (e) {
        console.log(e);
    }


}

main();