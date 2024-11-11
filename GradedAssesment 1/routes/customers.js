const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const Order = require('../models/Order');


router.post('/', async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.send(customer);
});


router.get('/:name/orders', async (req, res) => {
    const customer = await Customer.findOne({ name: req.params.name });
    if (!customer) return res.status(404).send('Customer not found');
    const orders = await Order.find({ customer_id: customer._id });
    res.send(orders);
});

module.exports = router;
