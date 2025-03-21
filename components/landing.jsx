import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative h-screen w-full">
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/public/Background_desktop.png)", // Stelle sicher, dass du ein Bild im public Ordner hast
          filter: "brightness(0.9)", // Optional: macht das Bild etwas dunkler für bessere Lesbarkeit
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-20 md:w-[60%]">
          Together for healthcare worldwide
        </h1>
        <a href="/">
          <button
            className="bg-[#2353B2] hover:bg-[#173777] text-white px-8 py-3 rounded-lg 
          text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center justify-center space-x-8">
              <p>Support us now</p>
              <ArrowRight />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
