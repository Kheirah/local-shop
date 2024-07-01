import Heading from "@/components/heading";
// import React from "react";

export default function Page({ params }) {
  return (
    <>
      <div className="p-30 bg-purple-600 p-20 border-8 border-indigo-700 text-white">
        <Heading>List of Special Offers by {params.shop}:</Heading>
      </div>
    </>
  );
}
