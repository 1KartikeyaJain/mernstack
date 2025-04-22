// import {MongoClient} from "mongodb";
//     const client =new MongoClient("mongodb://localhost:27017")

//     async function run(){
//         await client.connect()

//         const database =client.db("node connection");
//             database.collection("user");
//        collection.insertOne({"name":"Abhy","age":66});
//        console.log("insert successfully");     
//     }
//     run();

import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function run() {
    try {
        await client.connect();

        const database = client.db("node-connection"); 
        const collection = database.collection("user");

        await collection.insertOne({ name: "Abhy", age: 66 }); 
        console.log("Insert successful");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
