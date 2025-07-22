const mongoose = require('mongoose');
const orderschema = new mongoose.Schema({
         cartItems: Array,
         amount: String,
         Status: String,
         createdAt: Date 
})

const orderModel = mongoose.model('order', orderschema);
module.exports = orderModel;