import {
  Bars4Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import LocaleSwitcherSelect from "../LocaleSwitcher";
import {useTranslations} from "next-intl";
import Image from "next/image";
import logo from "../../../public/logo.png";
import SearchInput from "../ui/inputs/search";
import {Link} from "@/messages/navigation";
import PrimaryBtnFilled from "../ui/buttons/primary/filled/PrimaryBtnFilled";
export default function Header() {
  const t = useTranslations("Navigations");
  const tBtn = useTranslations("ButtonPrimary");
  const navBars = [
    "shares",
    "credit",
    "paymentAndDelivery",
    "help",
    "contact",
  ] as const;

  return (
    <header>
      <div className="bg-dark py-4">
        <div className="max-container">
          <div className="lg:flex hidden justify-between">
            <nav className="flex items-center gap-x-6">
              <button>
                <Bars4Icon className="text-soft" height={24} width={24} />
              </button>
              {navBars.map((nav) => (
                <Link
                  key={nav}
                  href="/"
                  className="text-titles-normal-t-14 hover:text-opacity-70 text-soft"
                >
                  {t(nav)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-8">
              <LocaleSwitcherSelect />
              <UserIcon className="text-soft" width={24} height={24} />
            </div>
          </div>
          <div className="lg:hidden grid gap-4">
            <div className="flex items-center justify-between">
              <button>
                <Bars4Icon className="text-soft" height={24} width={24} />
              </button>
              <Image src={logo} alt="logo image" />
              <PhoneIcon className="text-white" width={31} height={31} />
            </div>
            <div className="flex gap-[34px]">
              <Link href={"/category"}>
                <PrimaryBtnFilled
                  icon={<SquaresPlusIcon width={24} height={24} />}
                  btnText={tBtn("productCategory")}
                />
              </Link>
              <div className="flex gap-[34px] ml-auto">
                <MagnifyingGlassIcon
                  className="text-white"
                  width={31}
                  height={31}
                />
                <button className="relative items-center">
                  <ShoppingCartIcon
                    className="text-white"
                    width={31}
                    height={31}
                  />
                  <div className="absolute inline-flex m-[-12px] items-center justify-center w-6 h-6 text-uppercase-medium-12 text-soft bg-primary rounded-full top-1 end-1">
                    20
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] lg:block hidden px-4 py-6">
        <div className="max-container">
          <div className="flex items-center w-full gap-4">
            <div className="flex w-full max-w-max gap-[30px]">
              <Link href="/">
                <Image src={logo} alt="Website logo" />
              </Link>
              <Link href="/category">
                <PrimaryBtnFilled
                  icon={<SquaresPlusIcon width={24} height={24} />}
                  btnText={tBtn("productCategory")}
                />{" "}
              </Link>
            </div>
            <SearchInput />
            <div className="flex items-center  max-w-max min-w-max">
              <a
                className="text-body-strong-large-18 whitespace-nowrap"
                href=""
              >
                +998 94 730 70 06
              </a>
              <span className="h-full border-l-2 border-gray-300"></span>
              <div className="flex gap-[15px]">
                <button className="relative p-3">
                  <HeartIcon className="text-dark" width={40} height={40} />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-uppercase-medium-12 text-dark bg-yellow rounded-full top-1 end-1">
                    22
                  </div>
                </button>
                <button className="relative p-3">
                  <ShoppingCartIcon
                    className="text-dark"
                    width={40}
                    height={40}
                  />
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
