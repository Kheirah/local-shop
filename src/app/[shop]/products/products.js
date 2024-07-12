import { getProducts } from "@/services/products_service";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className="p-30 bg-purple-600 p-20 border-8 border-indigo-700 text-white"
        >
          <h2>{product.name}</h2>
          {/* <p>{product.description}</p>
          <p>Regular Price: {product.regularPrice}</p>
          <p>Special Price: {product.specialPrice}</p>
          <p>New: {product.new ? "Yes" : "No"}</p>
          <p>Hint: {product.hint}</p>
          <p>Active: {product.isActive ? "Yes" : "No"}</p> */}
        </div>
      ))}
    </>
  );
}
