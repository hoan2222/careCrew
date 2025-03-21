import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Nav() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-5 py-3 ">
      <a href="#home">
        <img
          src="https://hoan2222.github.io/careCrew/CareCrew.svg"
          alt="CARE_CREW"
        />
      </a>
      <a
        href="https://hoan2222.github.io/careCrew#about-us"
        className="hover:font-semibold"
      >
        ABOUT US
      </a>
      <a
        href="https://hoan2222.github.io/careCrew#our-concept"
        className="hover:font-semibold"
      >
        OUR CONCEPT
      </a>

      <a
        href="https://hoan2222.github.io/careCrew#projects"
        className="hover:font-semibold"
      >
        PROJECTS
      </a>
      <a href="https://hoan2222.github.io/careCrew">
        <Button className={"bg-[#2353B2] text-white cursor-pointer"}>
          <div className="flex flex-row items-center space-x-3">
            <p className=" font-medium text-lg">Donate now</p>
            <MoveRight size={200} />
          </div>
        </Button>
      </a>
    </div>
  );
}
