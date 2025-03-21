import Gallery from "./carousel";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 px-8 md:px-20 py-10 md:space-x-10">
      <h3 className="w-full text-center font-semibold text-3xl md:text-7xl">
        Current Project
      </h3>
      <p className="md:text-lg text-center pb-5">
        Escola Municipal at the Tracajá River in the Amazon - a small village
        with 375 inhabitants and major challenges: no hospitals nearby, no
        regular medical care, no dental care. There is often no time for the
        4-hour boat trip to the nearest hospital when a child falls ill or an
        expectant mother needs help. Nurse Gabriela Bentes Maia is alone -
        without doctors, without infrastructure, without support.
      </p>
      <p className="md:text-lg text-center pb-5">
        We want to change that - but we can't do it alone. With your help, we
        are raising 3,000 euros at to finance the construction of a medical hut.
        Together with our local contact, Heinz Rössler, and local people of
        trust , we are creating a sustainable solution. The hut will offer
        doctors and dentists a permanent location and the children a safe place
        to go. In this way, we are improving prevention and medical care for the
        80 local families. We rely on close cooperation with local partners to
        ensure that every donation arrives exactly where it is needed. Join us
        and help us to realize this heart project. Every support counts! Donate
        now!
      </p>
      <Gallery />
    </div>
  );
}
