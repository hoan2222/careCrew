import { Blend, HeartHandshake, Users } from "lucide-react";

export default function Concept() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-8 md:px-20 py-10 md:space-x-10">
      <h3 className="w-full text-center font-semibold text-3xl md:text-7xl pb-4">
        Our Concept
      </h3>
      <div className="flex flex-col md:py-14 md:flex-row items-center w-full space-x-4 space-y-4">
        {concept.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 md:w-[60%]"
          >
            <item.icon size={64} color="#2353B2" />
            <h4 className=" font-bold text-lg text-center">{item.title}</h4>
            <p className=" md:text-lg text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const concept = [
  {
    title: "Care that connects",
    description:
      "Creative campaigns and events that connect people here at Charité and globally through our projects.",
    icon: Users,
  },
  {
    title: "Transparency always",
    description:
      "It is important to us to maintain close contact with people on the ground so that support reaches those who need it most.",
    icon: Blend,
  },
  {
    title: "Exchanging goes both ways",
    description:
      "We learn from each other: by exchanging ideas on an equal footing, we expand our knowledge - medically, culturally and personally.",
    icon: HeartHandshake,
  },
];
