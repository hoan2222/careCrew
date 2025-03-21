import { DialogDemo } from "./dialogue";

export default function Join() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 px-8 md:px-20 py-10 md:space-x-10">
      <h3 className="w-full text-center font-semibold text-3xl md:text-7xl">
        Convinced ?
      </h3>
      <p className="md:text-lg text-center pb-5">
        Then come to the AG meetings to find out more or become part of the
        CareCrew right away
      </p>
      <DialogDemo />
    </div>
  );
}
