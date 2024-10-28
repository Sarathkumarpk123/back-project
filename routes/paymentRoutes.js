const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Q3g8U2Nr7HCljhoZt4rdFKMCFzi47pUSmfrQblTG9uBgZOvNH0olLCLh0aTfc4vY7GRxnVeR85LOzXdBhvitBJa00fjqh4eVI');

router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in smallest currency unit (e.g., cents)
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
