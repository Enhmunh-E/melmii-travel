"use client";
import { ChevronRight, Hamburger } from "@/icons";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export const Header = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const router = useRouter();
  const params= usePathname()
  const locale = useLocale();
  const onSelectChange = (lan) => {
    
    router.push(lan);
  };
  return (
    <div className={`fixed top-0 z-50 w-full bg-white`}>
      <div className="container py-4 flex flex-row items-center justify-between px-4 lg:px-0 mx-auto">
        <div className="relative">
          <div
            className="flex flex-row items-center cursor-pointer relative select-none"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            <div
              className={`transition-all ${languageOpen ? "rotate-90" : ""}`}
            >
              <ChevronRight />
            </div>
            <div className="gip font-bold text-base text-[#828282]">
              {locale == "en" ? "English" : "한국어"}
            </div>
          </div>
          <div
            className={`${
              languageOpen ? "w-36 h-[100px] p-4" : "w-0 h-0 p-0"
            } transition-all overflow-hidden absolute bg-white shadow-md rounded`}
          >
            <ul className="flex flex-col gap-1">
              <li
                className={`rounded px-2 py-1 cursor-pointer ${
                  locale == "en"
                    ? "text-black font-bold bg-black/10"
                    : "text-[#828282]"
                }`}
                onClick={() => onSelectChange("en")}
              >
                English
              </li>
              <li
                className={`rounded px-2 py-1 cursor-pointer  ${
                  locale == "kr"
                    ? "text-black font-bold bg-black/10"
                    : "text-[#828282]"
                }`}
                onClick={() => onSelectChange("kr")}
              >
                한국어
              </li>
            </ul>
          </div>
        </div>

        <Link className="gip font-bold text-2xl" href="/">
          SuriTour
        </Link>
        <div className="gip font-medium text-base">Contact Us</div>
        {/* <div className="p-2 ripple rounded-full cursor-pointer">
          <Hamburger />
        </div> */}
      </div>
    </div>
  );
};
