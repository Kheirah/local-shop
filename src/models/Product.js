const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageName: { type: String },
  regularPrice: { type: Number },
  specialPrice: { type: Number },
  new: { type: Boolean },
  hint: { type: String },
  isActive: { type: Boolean },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = { Product, productSchema };
