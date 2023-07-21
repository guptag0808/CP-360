const mongoose = require('mongoose');

const shopkeeperSchema = new mongoose.Schema({
	title:String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  zip:String,
  shopName: String,
  description: String,
  contactInfo: Number,
  address: String,
});

const Shopkeeper = mongoose.model('Shopkeeper', shopkeeperSchema);
module.exports = {Shopkeeper};
