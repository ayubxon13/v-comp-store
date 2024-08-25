import {Link} from "@/messages/navigation";
import {Bars4Icon, UserIcon} from "@heroicons/react/24/outline";
import LocaleSwitcherSelect from "../LocaleSwitcher";
import {useTranslations} from "next-intl";
import Image from "next/image";
import logo from "../../../public/logo.png";
import like from "../../../public/icons/like.png";
import scales from "../../../public/icons/scales.svg";
import shop from "../../../public/icons/shop.png";
import IconBtn from "../ui/buttons/primary/filled/IconBtn";
import SearchInput from "../ui/inputs/search";
export default function Header() {
  const t = useTranslations("Navigations");
  const tBtn = useTranslations("ButtonPrimary");

  return (
    <header>
      <div className="bg-dark py-2">
        <div className="max-container flex justify-between">
          <nav className="flex items-center gap-x-6">
            <button>
              <Bars4Icon className="text-soft" height={24} width={24} />
            </button>
            <Link href="/" className="text-titles-normal-t-14 text-soft">
              {t("shares")}
            </Link>
            <Link href="/" className="text-titles-normal-t-14 text-soft">
              {t("credit")}
            </Link>
            <Link href="/" className="text-titles-normal-t-14 text-soft">
              {t("paymentAndDelivery")}
            </Link>
            <Link href="/" className="text-titles-normal-t-14 text-soft">
              {t("help")}
            </Link>
            <Link href="/" className="text-titles-normal-t-14 text-soft">
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-8">
            <LocaleSwitcherSelect />
            <UserIcon className="text-soft" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] px-4 py-6">
        <div className="max-container">
          <div className="flex items-center w-full gap-4">
            <div className="gap-[30px] w-full max-w-max flex">
              <Link href="/">
                <Image src={logo} alt="Web site logo" />
              </Link>
              <IconBtn btnText={tBtn("productCategory")} />
            </div>
            <SearchInput />
            <div className="w-full flex items-center gap-[23.5px] max-w-max">
              <a className="text-body-strong-large-18" href="">
                +998 94 730 70 06
              </a>
              <p>
                <span className="h-full border-l-2 border-gray-300"></span>
              </p>
              <div className="flex gap-[15px]">
                <button className="relative items-center p-3">
                  <Image src={scales} alt="scales image" />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-uppercase-medium-12 text-dark bg-yellow rounded-full top-1 end-1">
                    20
                  </div>
                </button>
                <button className="relative items-center p-3">
                  <Image src={like} alt="scales image" />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-uppercase-medium-12 text-dark bg-yellow rounded-full top-1 end-1">
                    20
                  </div>
                </button>
                <button className="relative items-center p-3">
                  <Image src={shop} alt="scales image" />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-uppercase-medium-12 text-soft bg-primary rounded-full top-1 end-1">
                    20
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
