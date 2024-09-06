"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MainCarousel() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows={false}
      showArrows={false}
    >
      {[1, 2, 4].map((_, index) => (
        <div
          className="w-full md:h-[400px] h-[201px] bg-[url('/carouselImg.jpeg')] bg-cover bg-center bg-no-repeat"
          key={index}
        >
          <div className="lg:p-10 py-[54px] pr-4 grid">
            <h4 className="text-white md:gap-8 gap-[6px] lg:text-start text-end grid lg:text-headings-h1-40 text-headings-h3-24">
              TEXT BANNER
              <span className="lg:text-body-normal-middle-16 text-titles-normal-t-12 text-white">
                BANNER DESCRIPTION SMALL TEXT
              </span>
            </h4>
            <div className="flex lg:justify-start justify-end">
              <button className="lg:py-4 md:mt-8 mt-3 py-[13px] lg:text-titles-normal-t-16 text-titles-normal-t-12 lg:px-10 px-4 bg-red rounded text-soft w-max">
                BANNER BUTTON
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
