import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import NavBar from "../../components/navbar";

export default function ShopLayout({ params, children }) {
  return (
    <section>
      <NavBar shop={params.shop} />
      {children}
      <div></div>
    </section>
  );
}
