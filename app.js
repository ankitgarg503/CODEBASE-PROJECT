// JavaScript Code
const express =require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("Hii,I am root!");
})

const MONGO_URL ="mongodb://127.0.0.1:27017/test/AirBnb"

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err) => {console.log("error: ", err);});
    
async function main(){
    await mongoose.connect(MONGO_URL)
}

app.listen(8080,()=>{
    console.log("listening on server 8080");
});