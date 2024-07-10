const mongoose = require("mongoose");
const { Schema } = mongoose;
const { productSchema } = require("./Product.js");

const shopSchema = new Schema({
  shopName: { type: String, required: true },
  urlName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String },
  color1: { type: Number },
  color2: { type: Number },
  windowImageList: [{ type: String }],
  productList: [productSchema],
  active: { type: Boolean },
  numActiveOffers: { type: Number },
});

const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema); //modelName: "Shop"

module.exports = Shop;
