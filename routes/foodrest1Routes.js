const express = require('express');
const router = express.Router();
const { getAllFoodrest1, getFoodrest1ById, postFoodrest1, updateFoodrest1, deleteFoodrest1 } = require('../controllers/foodrest1Controllers');

router.get('/', getAllFoodrest1);
router.get('/:foodrest1Id', getFoodrest1ById);
router.post('/', postFoodrest1); 
router.patch('/:foodrest1Id', updateFoodrest1);
router.delete('/:foodrest1Id', deleteFoodrest1);

module.exports = router;
