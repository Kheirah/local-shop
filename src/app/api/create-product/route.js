import { createProduct } from "@/services/products_service";

export async function POST(request) {
  const productData = await request.formData();
  const product = await createProduct(Object.fromEntries(productData));
  if (product) {
    return new Response("success", { status: 201 });
  }
  return new Response("failed", { status: 500 });
}
