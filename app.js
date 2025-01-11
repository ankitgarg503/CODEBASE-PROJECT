// JavaScript Code
const express =require("express");
const app = express();
const mongoose = require("mongoose");

const Listing =require("./models/listing.js");

app.get("/", (req, res) => {
    res.send("Hii,I am root!");
})

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust"

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err) => {console.log("error: ", err);});
    
async function main(){
    await mongoose.connect(MONGO_URL)
}

app.get("/testListing", async (req, res) => {
     let sampleListing =new Listing({
        title:"My new Villa",
        description:"By the beech",
        price:1200,
        location:"Calianguate,Goa",
        country:"Inida",
     });
     await sampleListing.save();
     console.log("sample was saved");
     res.send("Succeful testing");
});
 

app.listen(8080,()=>{
    console.log("listening on server 8080");
});