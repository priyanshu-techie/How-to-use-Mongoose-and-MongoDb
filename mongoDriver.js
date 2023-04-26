const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'firseDb';

async function mainDatbaseConnectorAndFinder(){
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('comments');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}
// async function returns a promise here , if the await does not succeed then it will return a rejected promise eles a resolved promise.
mainDatbaseConnectorAndFinder();

