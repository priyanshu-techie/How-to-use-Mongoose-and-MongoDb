const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/temporary');
        console.log("db connected");
        const kittySchema = new mongoose.Schema({
            name: String
        });
        
        
        const Kitten = mongoose.model('Kitten', kittySchema);
        
        const kit1= await Kitten.findOne({name:"priyanshi"});
        kit1.name='prajapati'
        kit1.save();
        console.log(kit1);
    }
    catch (e) {
        console.log(e);
    }


}

main();