// import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function NavBar({ shop }) {
  return (
    <div>
      <ul className="flex flex-row justify-between bg-green-300 p-4">
        <li>
          <a href={"/" + shop}>
            <span className="font-bold text-pink-800">{shop}</span> (Home)
          </a>
        </li>
        <li>
          <a href={`/${shop}/products`}>Products</a>
        </li>
        <li>
          <a href={`/${shop}/about`}>About Us</a>
        </li>
        <li>
          <a href={`/${shop}/contact`}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
