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


        


    }
    catch (e) {
        console.log(e);
    }


}

main();