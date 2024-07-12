import mongoose from "mongoose";

const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    shopName: { type: String, required: true },
    urlName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String },
    color1: { type: Number },
    color2: { type: Number },
    windowImageList: [{ type: String }],
    productList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    active: { type: Boolean },
    numActiveOffers: { type: Number },
  },
  { versionKey: false }
);

const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);

export default Shop;
