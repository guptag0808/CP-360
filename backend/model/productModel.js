const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  shopkeeperId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shopkeeper', 
  },
  name: String,
  description: String,
  price: Number,
  stockQuantity: Number,
  images: [String],
});

const Product = mongoose.model('Product', productSchema);
module.exports = {Product};
