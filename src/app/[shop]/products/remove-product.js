"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(`/api/delete-product`, {
      method: "DELETE",
      body: JSON.stringify({ _id: id }),
    });
    const productData = await response.text();
    if (productData === "success") {
      alert("Product deleted successfully");
      router.refresh();
    } else {
      alert("Failed to delete product");
    }
  }

  return <button onClick={handleDelete}>X</button>;
}
