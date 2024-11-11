const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    order_id: String,
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
    order_date: { type: Date, default: Date.now },
    status: String,
    items: [
        {
            product_name: String,
            quantity: Number,
            price: Number
        }
    ],
    total_value: Number
});

module.exports = mongoose.model('Order', orderSchema);
