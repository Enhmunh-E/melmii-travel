"use client";
import { useState } from "react";
import { ArrowCircleIcon, ChevronRight } from "@/icons";
import Image from "next/image";

export const Images = ({ urls = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="flex-1 relative">
      {urls.map((url, index) => (
        <Image
          src={url}
          alt={index + "image"}
          key={index + "image"}
          fill
          className={`${
            index == imageIndex ? "opaity-100" : "opacity-0"
          } transition-all object-cover`}
        />
      ))}
      <div className="flex flex-row absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/40 border-[4px] box-border border-[rgba(255, 255, 255, 0.5)] backdrop-blur rounded-full gap-4 p-1 items-center">
        <button
          onClick={() =>
            setImageIndex(imageIndex == 0 ? urls.length - 1 : imageIndex - 1)
          }
        >
          <ArrowCircleIcon direction="left" color="black" filled />
        </button>
        <div className="flex flex-row gap-2">
          {urls.map((_, index) => (
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                imageIndex == index ? "bg-black w-6" : "bg-white"
              }`}
              key={index}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setImageIndex(imageIndex == urls.length - 1 ? 0 : imageIndex + 1)
          }
        >
          <ArrowCircleIcon color="black" filled />
        </button>
      </div>
    </div>
  );
};
