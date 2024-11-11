const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Customer = require('../models/Customer');


router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
});

router.get('/:order_id/customer', async (req, res) => {
    const order = await Order.findOne({ order_id: req.params.order_id });
    if (!order) return res.status(404).send('Order not found');
    const customer = await Customer.findById(order.customer_id);
    res.send(customer);
});


router.put('/:order_id/status', async (req, res) => {
    const order = await Order.findOneAndUpdate(
        { order_id: req.params.order_id },
        { status: req.body.status },
        { new: true }
    );
    res.send(order);
});


router.delete('/:order_id', async (req, res) => {
    const result = await Order.findOneAndDelete({ order_id: req.params.order_id });
    res.send(result);
});

module.exports = router;
