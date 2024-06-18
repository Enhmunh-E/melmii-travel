"use client";
import { ArrowCircleIcon, ArrowDown } from "@/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
export const Intro = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  console.log(locale);
  const data = [
    {
      src: "/assets/Photo1.jpg",
      title: "Unveil Nature's Wonders",
      titleKr: "자연의 경이로움을 공개하세요",
      description:
        "Discover the breathtaking beauty of Mongolia's vast steppe under the radiant daylight",
      descriptionKr:
        "빛나는 햇빛 아래서 몽골의 광활한 대초원의 숨막히는 아름다움을 발견해보세요",
    },
    {
      src: "/assets/Photo2.jpg",
      title: "Explore the sights of Mongolia",
      titleKr: "몽골의 명소를 탐험해보세요",
      description: "Untamed landscapes. Lose yourself under a million stars.",
      descriptionKr:
        "길들여지지 않은 풍경. 백만 개의 별 아래에서 자신을 잃어보세요.",
    },
    {
      src: "/assets/Photo3.jpg",
      title: "Journey into the Sands",
      titleKr: "모래로의 여행",
      description: "Embark on an unforgettable adventure across desert dunes.",
      descriptionKr: "사막 모래 언덕을 가로지르는 잊지 못할 모험을 떠나보세요.",
    },
  ];
  const [index, setIndex] = useState(0);
  const carouselClick = (direction) => {
    if (direction == "left") {
      setIndex((prev) => (prev == 0 ? data.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev + 1 == data.length ? 0 : prev + 1));
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 == data.length ? 0 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [index, data.length]);
  return (
    <div
      className="w-fill m-4 mt-0 relative rounded-3xl overflow-hidden flex border-4 border-collapse"
      style={{
        height: "calc(100vh - 73px - 16px)",
      }}
    >
      <div className="absolute top-16 left-8 z-10 gip text-white flex flex-col gap-4 pr-8 items-start">
        <div className="font-bold text-5xl md:text-7xl lg:text-9xl md:font-semibold">
          {data[index]["title" + (locale == "kr" ? "Kr" : "")]}
        </div>
        <div className="font-normal text-xl">
          {data[index]["description" + (locale == "kr" ? "Kr" : "")]}
        </div>
        <div className="ripple bg-white text-black py-3 px-8 gip rounded-full mt-6 cursor-pointer font-semibold">
          {t("Book Now")}
        </div>
      </div>
      <div className="absolute bottom-8 w-full z-50 gip flex items-center text-white flex-col gap-1 md:items-end md:pr-8">
        <div className="font-light text-base">{t("Scroll Down")}</div>
        <div className="ripple text-black bg-white/30 py-3 px-8 gip rounded-full cursor-pointer backdrop-blur-sm">
          <ArrowDown />
        </div>
      </div>
      <div className="absolute bottom-8 left-8 z-50 gip hidden flex-row text-white gap-2 md:flex">
        <div
          className="ripple cursor-pointer"
          onClick={() => carouselClick("left")}
        >
          <ArrowCircleIcon direction="left" />
        </div>
        <div
          className="ripple cursor-pointer"
          onClick={() => carouselClick("right")}
        >
          <ArrowCircleIcon direction="right" />
        </div>
      </div>
      {data.map((item, i) => (
        <div
          key={i}
          className={`absolute w-full h-full select-none ${
            i == index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "all 400ms",
            top: 0,
          }}
        >
          <Image
            src={item.src}
            fill
            alt="Mongolia Image"
            // priority
            // unoptimized={true}
            className={`object-cover select-none ${
              i == index ? "introImageAnimation" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};
