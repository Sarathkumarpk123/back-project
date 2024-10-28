const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Associate cart with a user
  username: { type: String, required: true }, // Add username field
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  restaurant: String,
  totalprice: Number,
  status: String
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;  
