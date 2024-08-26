"use client";
import LeftCategory from "@/components/LeftCategory";
import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className="lg:max-container lg:mt-8 flex gap-4">
      <div className="flex-shrink-0 lg:block hidden w-max">
        <LeftCategory />
      </div>
      <div className="flex-grow overflow-hidden">
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
              <div className="p-10 grid lg:justify-items-start justify-items-end">
                <h4 className="text-white md:gap-8 gap-[6px] grid lg:text-headings-h1-40 text-headings-h3-24">
                  TEXT BANNER
                  <span className="lg:text-body-normal-middle-16 text-titles-normal-t-12 text-white">
                    BANNER DESCRIPTION SMALL TEXT
                  </span>
                </h4>
                <button className="lg:py-4 md:mt-8 mt-3 py-[13px] lg:text-titles-normal-t-16 text-titles-normal-t-12 lg:px-10 px-4 bg-red rounded text-soft w-max">
                  BANNER BUTTON
                </button>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="flex max-container lg:mt-[46px] mt-4 gap-[58px] overflow-x-auto">
          {Array.from({length: 7}, (_, idx) => idx + 1).map((currentIdx) => (
            <div
              key={currentIdx}
              className="grid justify-items-center gap-[6px] max-w-[110px] shrink-0"
            >
              <Image
                src={`/info/${currentIdx}.svg`}
                width={60}
                height={60}
                alt="image"
              />
              <p className="text-center text-label-strong-extra-small-12 text-dark">
                Бесплатная сборка
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
