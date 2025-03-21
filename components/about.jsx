export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center  px-8 md:px-20 py-10 md:space-x-10">
      <img
        src="/group_picture_mini.png"
        alt="Wir sind Care Crew in Berlin"
        className="md:w-[40%] rounded-sm pt-10 md:p-0"
      />
      <div className="flex flex-col items-center justify-center space-y-8 md:h-full md:items-start">
        <h3 className=" text-left w-full font-semibold text-3xl md:text-7xl">
          Who we are
        </h3>
        <p className="md:text-lg">
          Great to have you here! We are CareCrew, a motivated team of medical
          students who support social and medical projects with creative
          activities. Discover our current events and projects and let's do
          something good together!
        </p>
      </div>
    </div>
  );
}
