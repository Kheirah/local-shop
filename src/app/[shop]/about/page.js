import SubPage from "@/components/subpage";
import Heading from "@/components/heading";

export default function About() {
  const colors = {
    color1: "blue-600",
    color2: "blue-900",
    textColor: "white",
  };
  return (
    <SubPage
      //   className="bg-blue-600 border-blue-900 text-white"
      colors={colors}
    >
      <div>
        <Heading>About Us</Heading>
        <ul>
          <li>
            <p>Who we are</p>
          </li>
          <li>
            <p>What we offer</p>
          </li>
          <li>
            <p>Our History</p>
          </li>
        </ul>
      </div>
    </SubPage>
  );
}
