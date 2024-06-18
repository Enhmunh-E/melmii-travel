import Link from "next/link";
import { Facebook, Instagram } from "../icons";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Other");
  return (
    <div className="bg-black/90 text-white p-6 m-4 rounded-3xl">
      <div className="container mx-auto flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <Link href="/contact">
            <div className="text-base">Contact Us</div>
          </Link>
          <div className="flex flex-row gap-4">
            <Link href="https://www.facebook.com/">
              <div className="rounded-full p-2 bg-secondary">
                <Facebook />
              </div>
            </Link>
            <Link href="https://www.instagram.com/">
              <div className="rounded-full p-2 bg-secondary">
                <Instagram />
              </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="text-base text-center">{t("AllRights")}</div>
      </div>
    </div>
  );
};
