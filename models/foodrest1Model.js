const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  isVeg: { type: Boolean, required: true }  // Determines if it's veg or non-veg
}, { timestamps: true }); // Add timestamps option here

const Foodrest1 = mongoose.model('Foodrest1', foodSchema);
module.exports = Foodrest1;
