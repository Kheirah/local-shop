import NavBar from "@/components/navbar";

export default function ShopLayout({ params, children }) {
  return (
    <section>
      <NavBar shop={params.shop} />
      {children}
    </section>
  );
}
