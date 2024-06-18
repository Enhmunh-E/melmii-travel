"use client";
import { Header, Footer, Images } from "@/components";
import { ArrowDown, ArrowRight } from "@/icons";
import { supabase } from "@/utils/supabase/client";
import { useEffect } from "react";
const Tour = ({ params: { tourid: tourid } }) => {
  useEffect(() => {
    const getTour = async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("id", tourid);
      console.log(data, error);
    };
    getTour();
  }, []);
  return (
    <div className="pt-[72px]">
      <Header />
      <div className="min-h-screen gip flex flex-col gap-24">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-16">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
            {/* Body Text */}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-4xl md:text-[64px] font-bold leading-normal">
                Gobi Travel
              </h1>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Overview</h2>
                <p className="text-black/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Includes</h2>
                <ul className="box-border list-disc text-black/70 pl-4">
                  <li>
                    Accomodation
                    <ul className="list-disc pl-4">
                      <li>
                        Double, twin or single room and 3+tent++Mongolia
                        traditional yurt (ger) star guest house en-suite room
                        upgrade rates options are also available on request (at
                        extra costs)
                      </li>
                    </ul>
                  </li>
                  <li>
                    Guide
                    <ul className="list-disc pl-4">
                      <li>Friendly local English-speaking tour guide</li>
                    </ul>
                  </li>
                  <li>
                    Meals (as specified)
                    <ul className="list-disc pl-4">
                      <li>
                        This tour offers Vegetarian and Vegan food options on
                        request. Simply let our Customer Support team know the
                        food option that you prefer.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Additional Services
                    <ul className="list-disc pl-4">
                      <li>Transportation and driver</li>
                      <li>Clean drinking water</li>
                      <li>Border permits and national park entrance fees</li>
                      <li>Horseback riding</li>
                    </ul>
                  </li>
                  <li>
                    Accomodation
                    <ul className="list-disc pl-4">
                      <li>
                        Double, twin or single room and 3+tent++Mongolia
                        traditional yurt (ger) star guest house en-suite room
                        upgrade rates options are also available on request (at
                        extra costs)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* Image Container */}
            <div className="flex-1 flex aspect-square rounded-2xl overflow-hidden border-[4px] box-border border-[rgba(255, 255, 255, 0.75)]">
              <Images urls={images} />
            </div>
          </div>
          {/* Itinerary */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">Itinerary</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {new Array(7).fill(null).map((_, index) => (
                <div
                  className="flex flex-col bg-[#F4F4F4] p-3 rounded-2xl gap-2"
                  key={index}
                >
                  <h3 className="font-bold text-xl">Day {index + 1}</h3>
                  <h4 className="text-lg font-medium">
                    Arrive in Ulaanbaatar and City Tour
                  </h4>
                  <div className="flex flex-row justify-end">
                    <button className=" px-6 py-2 bg-black rounded text-white font-semibold">
                      Detailed
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Available Dates */}
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">Available Dates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {new Array(7).fill(null).map((_, index) => (
                  <div
                    className="flex-1 flex flex-col gap-2 bg-[#F4F4F4] rounded-2xl p-3 md:p-4"
                    key={index}
                  >
                    <div className="flex flex-row gap-8 justify-between items-center w-full">
                      <div>
                        <div className="font-medium text-base text-[#c1c1c1]">
                          {"Mon"}
                        </div>
                        <div className="font-bold text-xl">
                          {"July 1st 2022"}
                        </div>
                      </div>
                      <ArrowRight />
                      <div>
                        <div className="font-medium text-base text-[#c1c1c1]">
                          {"Mon"}
                        </div>
                        <div className="font-bold text-xl">
                          {"July 8th 2022"}
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-center text-[#c1c1c1]">
                      7 days / 6 nights
                    </div>
                    <div className="font-bold text-xl text-center">$500</div>
                    <button className=" px-6 py-2 bg-black rounded text-white font-semibold">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Tour;

const images = [
  "https://media.cnn.com/api/v1/images/stellar/prod/230318120009-01-taylor-swift-eras-tour-0317.jpg?c=original",
  "/assets/Gobi.jpg",
  "https://media.cnn.com/api/v1/images/stellar/prod/230318120009-01-taylor-swift-eras-tour-0317.jpg?c=original",
  "/assets/Gobi.jpg",
  "https://media.cnn.com/api/v1/images/stellar/prod/230318120009-01-taylor-swift-eras-tour-0317.jpg?c=original",
];
