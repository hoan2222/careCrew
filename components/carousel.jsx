import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Gallery() {
  return (
    <div className="flex justify-center max-w-[100%]">
      <Carousel className="md:w-[60%]">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <img src="/Schule_outdoor.png" alt="Die Schule" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <img src="/Schule_indoor.png" alt="Das Klassenzimmer" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <img src="/Schüler_Szenerie.png" alt="Schüler" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <img src="/Medikamente.png" alt="Medikamente vor Ort" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className=" hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
