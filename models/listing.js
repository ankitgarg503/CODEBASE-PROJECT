const mongoose = require('mongoose');
const { title } = require('process');
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
  title:{
  type:String,
  required:true,
  },
  description:String,
  image:{
    type:String,
    default:"https://tse3.mm.bing.net/th?id=OIP.5kGyoxY2XZDixSK0JrZLjQHaFE&pid=Api&P=0&h=180",

    set:(v) =>v==="" ? "https://tse3.mm.bing.net/th?id=OIP.5kGyoxY2XZDixSK0JrZLjQHaFE&pid=Api&P=0&h=180" : v,
  },
  price:Number,
  location:String,
  country:String,
});

const Listing =mongoose.model("Listing",listingSchema);
module.exports =Listing;