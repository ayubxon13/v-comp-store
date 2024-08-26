"use client";
import {
  ChevronRightIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import {useTranslations} from "next-intl";
import {useState} from "react";

export default function LeftCategory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const t = useTranslations("LeftCategoryItems");

  const leftCategoryItems = [
    "pcComponents",
    "monitors",
    "computers",
    "laptops",
    "gameConsoles",
    "laptopcomponents",
    "tablets",
    "printersAndMFPs",
    "networkEquipment",
    1,
  ] as const;

  return (
    <ul className="space-y-2.5">
      {leftCategoryItems.map((item, index) => (
        <div key={index}>
          <li
            className="flex gap-10 items-center justify-between cursor-pointer transition-all duration-300 ease-in-out rounded-md p-3"
            onClick={() => toggleOpen(index)}
          >
            <div className="flex items-center space-x-2">
              <Cog6ToothIcon className="w-6 h-6" />
              <span className="text-titles-normal-t-16 text-dark">
                {t(item)}
              </span>
            </div>
            <ChevronRightIcon
              className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                openIndex === index ? "rotate-90" : "rotate-0"
              }`}
            />
          </li>
          <hr className="text-[#0000000A]" />
          <div
            className={`pl-8 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out rounded-md p-2">
              <div className="flex items-center space-x-2">
                <ComputerDesktopIcon className="w-6 h-6" />
                <span className="text-titles-normal-t-16 text-dark">
                  Мониторы
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 transition-transform duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
