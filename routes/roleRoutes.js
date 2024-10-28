const express = require('express');
const {verifyToken} = require('../middleware/authMiddleware')
const router = express.Router();

router.get('/checkRole', verifyToken, (req, res) => {
  const role = req.user.role; // Extracting the role from JWT
  res.json({ success: true, role });
});

module.exports = router;
 