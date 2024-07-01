import Heading from "@/components/heading";
import SubPage from "@/components/subpage";

export default function Contact() {
  const colors = {
    color1: "indigo-300",
    color2: "indigo-500",
    textColor: "black",
  };

  return (
    <SubPage
      //   className="text-black bg-indigo-300 border-indigo-500"
      colors={colors}
    >
      <div>
        <Heading>Contact us</Heading>
        <p>Give some feedback, ask anything.</p>
      </div>
    </SubPage>
  );
}
