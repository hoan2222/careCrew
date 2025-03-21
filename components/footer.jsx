import Logo from "./logo";

export default function Footer() {
  return (
    <div className="bg-[#2353B2] text-white text-center py-5 px-8 md:px-48 space-y-6">
      <div className=" flex flex-col items-center space-y-2">
        <Logo color="#ffffff" />
        <img src="/CareCrew.svg" alt="CARE_CREW" />
        <p>
          We are students at the Charité who are passionately committed to
          social and medical projects. It is important to us to use creative
          ideas and a lot of heart to set up fundraising campaigns that really
          make a difference. Community and commitment are our top priorities. We
          believe that everyone can make a difference through small and large
          deeds at. Whether through our events or personal support - we want to
          bring people together and do something good together!
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <a href="https://www.instagram.com/carecrew.berlin?igsh=MWt2dXVvbGViNXptag==">
          INSTAGRAM
        </a>
        <a href="/imprint">IMPRINT</a>
      </div>
      <p>© 2025 CareCrew</p>
    </div>
  );
}
