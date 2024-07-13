import { createShop, updateShop } from "@/services/shop_service";

export async function POST(request) {
  const shopData = await request.formData();
  const shop = await createShop(Object.fromEntries(shopData));
  if (shop) {
    return new Response("success", { status: 201 });
  }
  return new Response("failed", { status: 500 });
}

export async function PUT(request) {
  const shopData = await request.formData();
  const shop = await updateShop(
    shopData.get("shopUrl"),
    Object.fromEntries(shopData)
  );
  if (shop) {
    return new Response("success", { status: 200 });
  }
  return new Response("failed", { status: 500 });
}
