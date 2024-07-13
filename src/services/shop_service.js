import dbConnect from "@/lib/connect";
import Shop from "@/models/Shop";

export async function getShops() {
  await dbConnect();
  const shops = await Shop.find();
  return shops;
}

export async function getShop(urlName) {
  await dbConnect();
  const shop = await Shop.findOne({ urlName });
  return shop;
}

export async function getShopProducts(urlName) {
  await dbConnect();
  const shop = await Shop.findOne({ urlName }).populate("productList");
  return shop.productList;
}

export async function createShop(shopData) {
  await dbConnect();
  const shop = await Shop.create(shopData);
  return shop;
}

export async function updateShop(urlName, shopData) {
  await dbConnect();
  const shop = await Shop.findOneAndUpdate({ urlName }, shopData, {
    new: true,
  });
  return shop;
}
