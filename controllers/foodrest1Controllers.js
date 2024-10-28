const Foodrest1=require('../models/foodrest1Model')

const getAllFoodrest1=async(req, res) => {

  const { vegOnly } = req.query;  // Capture query parameter for filtering...veg or non veg filteration happens here
  let filter = {};
  
  if (vegOnly === 'true') {
      filter.isVeg = true;
  } else if (vegOnly === 'false') {
      filter.isVeg = false;
  }

  const foods = await Foodrest1.find(filter);
    res.json(foods)
  }

 const getFoodrest1ById= async(req, res) => {
  const food=await Foodrest1.findById(req.params.foodId).exec();
  res.json(food) 
  }
  
  const postFoodrest1 = async (req, res) => {
    const data = req.body;
  
    // If the image is base64 encoded
    if (data.image.startsWith('data:image/')) {
      // You can save it as a string directly in your database
      // Make sure the food model has an 'image' field that can accept a string
    }
  
    const food = new Foodrest1(data);
    await food.save();
    res.json(food);
  };
  

 const updateFoodrest1=async (req, res) => {
  const updatedfood=await Foodrest1.findByIdAndUpdate(req.params.food, req.body, {new:true})
  res.json(updatedfood)
  } 

 const deleteFoodrest1=async (req, res) => {
  await Foodrest1.findByIdAndDelete(req.params.food)
    res.send('Deleted')
  }
  
  module.exports={
    getAllFoodrest1,
    getFoodrest1ById,
    postFoodrest1,
    updateFoodrest1,
    deleteFoodrest1
  } 