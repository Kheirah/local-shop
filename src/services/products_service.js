import dbConnect from "@/lib/connect";
import Product from "@/models/Product";

export async function getProducts() {
  await dbConnect();
  const products = await Product.find();
  return products;
}

export async function getProduct(id) {
  await dbConnect();
  const product = await Product.findById(id);
  return product;
}

export async function createProduct(productData) {
  await dbConnect();
  const product = await Product.create(productData);
  return product;
}
