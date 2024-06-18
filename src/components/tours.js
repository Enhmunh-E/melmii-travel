import { ArrowCircleIcon, SeparatorIcon } from "@/icons";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
export const Tours = () => {
  const locale = useLocale();
  const t = useTranslations("Tour");

  const data = [
    {
      title: "Gobi Desert",
      price: 400,
      span: 5,
      image: "/assets/Gobi.jpg",
      id: 1,
    },
    {
      title: "Terelj Park",
      price: 200,
      span: 1,
      image: "/assets/Terelj.jpg",
      id: 2,
    },
    {
      title: "Elsen Tasarkhai",
      price: 400,
      span: 3,
      image: "/assets/ElsenTasarkhai.jpg",
      id: 3,
    },
  ];
  return (
    <div className="container mx-auto py-16">
      <div className="gip text-3xl md:text-5xl lg:text-5xl font-semibold pb-8">
        {t("Choose your tour")}
      </div>
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        {data.map((tour, index) => (
          <Link
            locale={locale}
            href={`/${locale}/${tour.id}`}
            className="flex flex-col justify-end relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            key={index}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-row z-10 justify-between m-4 p-4 bg-black/30 backdrop-blur-sm text-white rounded">
              <div className="flex flex-col">
                <div className="text-xl font-medium">{tour.title}</div>
                <div className="flex flex-row">
                  <div className="font-semibold">
                    ${tour.price}
                    <span className=" font-light text-sm">
                      {" / "} {t("Per person")}
                    </span>
                  </div>
                  <SeparatorIcon />
                  <div>
                    {tour.span}{" "}
                    <span className="font-light text-sm">
                      {t(tour.span == 1 ? "day" : "days")}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <ArrowCircleIcon color="black" filled={true} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
