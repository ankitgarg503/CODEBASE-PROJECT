// JavaScript Code
const express =require("express");
const app = express();
const mongoose = require("mongoose");

const Listing =require("./models/listing.js");

const path =require("path");
const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust"

app.use(express.urlencoded({extended:true}));

main()
.then(()=>{
    console.log("connected to db");
})
.catch((err) => {console.log("error: ", err);});

async function main(){
    await mongoose.connect(MONGO_URL)
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/", (req, res) => {
    res.send("Hii,I am root!");
})

app.get("/listings", async (req, res) => {
   const allListings= await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} =req.params;
   // Listing.findById(id);
    const listing =await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});




// app.get("/testListing", async (req, res) => {
//      let sampleListing =new Listing({
//         title:"My new Villa",
//         description:"By the beech",
//         price:1200,
//         location:"Calianguate,Goa",
//         country:"Inida",
//      });
//      await sampleListing.save();
//      console.log("sample was saved");
//      res.send("Succeful testing");
// });
 

app.listen(8080,()=>{
    console.log("listening on server 8080");
});