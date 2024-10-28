const Cart = require('../models/cartModel');

const getAllCart = async (req, res) => {
  const userId = req.user._id; // Get userId from the request (from middleware)
  const carts = await Cart.find({ userId }); // Find carts only for the logged-in user
  res.json(carts);
};

const getCartById = async (req, res) => {
  const cart = await Cart.findById(req.params.cartId).exec();
  res.json(cart);
};

const postCart = async (req, res) => {
  const data = req.body;
  const userId = req.user._id; // Attach userId from authenticated user

  const cart = new Cart({ ...data, userId, username: data.username }); // Create a new cart with userId and username
  await cart.save();
  res.json(cart);
};


const updateCart = async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, req.body, { new: true });
  res.json(updatedCart);
};

const deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.cartId);
  res.send('Deleted');
};

module.exports = {
  getAllCart,
  getCartById,
  postCart,
  updateCart,
  deleteCart
};
