import { deleteProduct } from "@/services/products_service";

export async function DELETE(request) {
  const productData = await request.json();
  const product = await deleteProduct(productData._id);
  if (product) {
    return new Response("success", { status: 200 });
  }
  return new Response("failed", { status: 500 });
}
