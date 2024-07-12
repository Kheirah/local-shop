import Heading from "@/components/heading";
import Products from "./products";
import ProductForm from "./product-form";

export default function Page({ params }) {
  return (
    <div className="p-30 bg-purple-600 p-20 border-8 border-indigo-700 text-white">
      <ProductForm />
      <Heading>Products by {params.shop}:</Heading>
      <Products />
    </div>
  );
}
