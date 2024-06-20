export default function Page({ params }) {
  return (
    <>
      <div className="p-30 bg-pink-900 p-20 border-8 border-pink-600">
        <h1 className="text-2xl text-gray-500">
          {params.shop}'s special offer with ID {params.id}:
        </h1>
      </div>
    </>
  );
}
