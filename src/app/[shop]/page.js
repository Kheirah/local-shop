import { getShop } from "@/services/shop_service";
import Settings from "./settings";

export default async function Page({ params }) {
  const found = await getShop(params.shop);

  if (!found) {
    return (
      <div className="p-30 bg-purple-600 p-20 border-8 border-indigo-700 text-white">
        <div>Shop {params.shop} not found</div>
      </div>
    );
  }

  return <Settings shopName={found.shopName} shopUrl={found.urlName} />;
}
