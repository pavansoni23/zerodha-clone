const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
  });

const Order = new mongoose.model("Order", OrderSchema);

module.exports = Order;
