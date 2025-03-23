import { DonationDialogue } from "../donation_dialogue";

export default function Nav() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-5 py-3 ">
      <a href="#home">
        <img
          src="https://hoan2222.github.io/careCrew/logo.png"
          alt="CARE_CREW"
          className="w-44"
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
      <DonationDialogue />
    </div>
  );
}
