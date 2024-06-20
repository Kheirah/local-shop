import React from "react";

export default function Page({ params }) {
  return (
    <>
      <div className="p-30 bg-purple-600 p-20 border-8 border-indigo-700">
        <h1 className="text-2xl text-gray-500">
          List of Special Offers by {params.shop}:
        </h1>
      </div>
    </>
  );
}
