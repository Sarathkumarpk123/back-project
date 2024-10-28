const Food=require('../models/foodModel')

const getAllFood=async(req, res) => {

  const { vegOnly } = req.query;  // Capture query parameter for filtering...veg or non veg filteration happens here
  let filter = {};
  
  if (vegOnly === 'true') {
      filter.isVeg = true;
  } else if (vegOnly === 'false') {
      filter.isVeg = false;
  }

  const foods = await Food.find(filter);
    res.json(foods)
  }

 const getFoodById= async(req, res) => {
  const food=await Food.findById(req.params.foodId).exec();
  res.json(food)
  }
  
  const postFood = async (req, res) => {
    const data = req.body;
  
    // If the image is base64 encoded
    if (data.image.startsWith('data:image/')) {
      // You can save it as a string directly in your database
      // Make sure the food model has an 'image' field that can accept a string
    }
  
    const food = new Food(data);
    await food.save();
    res.json(food);
  };
  

 const updateFood=async (req, res) => {
  const updatedfood=await Food.findByIdAndUpdate(req.params.foodId, req.body, {new:true})
  res.json(updatedfood)
  } 

 const deleteFood=async (req, res) => {
  await Food.findByIdAndDelete(req.params.foodId)
    res.send('Deleted')
  }
  
  module.exports={
    getAllFood,
    getFoodById,
    postFood,
    updateFood,
    deleteFood
  } 