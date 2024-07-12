"use client";

import { useRouter } from "next/navigation";

export default function ProductForm() {
  const router = useRouter();
  async function handleCreateProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch(`/api/create-product`, {
      method: "POST",
      body: formData,
    });
    const productData = await response.text();
    if (productData === "success") {
      alert("Product created successfully");
      event.target.reset();
      router.refresh();
    } else {
      alert("Failed to create product");
    }
  }

  return (
    <form className="text-black" onSubmit={handleCreateProduct}>
      <label htmlFor="name">Product Name:</label>
      <input id="name" type="text" name="name" placeholder="Product Name" />
      <button type="submit">Create Product</button>
    </form>
  );
}
