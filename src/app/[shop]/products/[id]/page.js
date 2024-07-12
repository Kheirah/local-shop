import Heading from "@/components/heading";

export default function Page({ params }) {
  return (
    <div className="p-30 bg-pink-900 p-20 border-8 border-pink-600 text-white">
      <Heading>
        {params.shop}&apos;s special offer with ID {params.id}:
      </Heading>
    </div>
  );
}
