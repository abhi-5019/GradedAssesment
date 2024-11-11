const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: {
        street: String,
        city: String,
        zipcode: String
    },
    phone: String,
    registration_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', customerSchema);
