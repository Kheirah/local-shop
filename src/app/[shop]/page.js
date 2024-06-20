export default function Page({ params }) {
  return (
    <>
      <div className="p-30 bg-green-500 p-20 border-8 border-green-900">
        <h1 className="text-2xl text-grey">
          Welcome to {params.shop} shop page!
        </h1>
      </div>
    </>
  );
}
