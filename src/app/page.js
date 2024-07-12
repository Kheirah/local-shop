import Link from "next/link";

export default function Home() {
  return (
    <div className="border-8 border-indigo-900 bg-purple-900 w-full h-full text-white p-20">
      <h1 className="text-3xl">Welcome to LocalShop!</h1>
      <div>
        <Link className="text-blue-400 p-4" href="/register">
          Register your Store
        </Link>

        <Link className="text-blue-400 p-4" href="/login">
          Login to your Store
        </Link>
      </div>
    </div>
  );
}
