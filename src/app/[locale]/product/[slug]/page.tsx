"use client";
import PrimaryBtnFilled from "@/components/ui/buttons/primary/filled/PrimaryBtnFilled";
import PrimaryBtnOutlined from "@/components/ui/buttons/primary/outlined/PrimaryBtnOutlined";
import CheaperProducts from "@/components/ui/cards/CheaperProducts";
import ProductCard from "@/components/ui/cards/ProductCard";
import Stars from "@/components/ui/Stars";
import {
  CheckCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import {useState} from "react";

export default function ProductSinglePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <div className="max-container">
      <div className="flex justify-between items-center">
        <div className="grid gap-3 mb-6 mt-12">
          <p className="lg:text-headings-h4-24 text-headings-h6-16 text-dark">
            Ноутбук Vinga Iron S140 Grey (S140-P50464GWP)
          </p>
          <div className="flex gap-3 items-center">
            <Stars />
            <p className="text-titles-normal-t-12 text-grey-40">Отзывов: 4</p>
          </div>
        </div>
        <p className="text-body-normal-medium-14 text-grey-40">
          Код товара: 1234
        </p>
      </div>
      <div className="w-full contents max-w-md mx-auto">
        <div className="flex border-b border-grey-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2  ${
                activeTab === index
                  ? "border-b-[1px] border-secondary text-titles-strong-t-14 text-secondary"
                  : "text-dark-grey border-secondary+ text-titles-strong-t-14"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative mt-4">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <div>content 1</div> */}
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <div>Content for Tab 2</div> */}
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <div>Content for Tab 3</div> */}
          </div>
        </div>
      </div>
      <div className="xl:flex grid gap-4">
        <div className="grid gap-y-8 xl:max-w-[758px] w-full">
          <div className="md:flex grid gap-4 w-full max-h-[580px] h-full">
            <div className="flex md:flex-col lg:order-[1] order-2 gap-2 overflow-auto">
              {Array.from({length: 4}).map((_, idx) => (
                <div key={idx} className="lg:w-40 w-32 h-32 lg:h-40">
                  <img
                    className="m-auto"
                    src={`https://picsum.photos/160/160?random=${idx}`}
                    alt="image"
                  />
                </div>
              ))}
            </div>
            <img
              className="xl:max-w-[580px] md:h-[580px] h-[328px] w-full object-cover"
              src="https://picsum.photos/480/480"
              alt="image"
            />
          </div>

          <div className="lg:order-none">
            <h4 className="text-headings-h4-24 mb-4 text-dark-grey">
              Основные характеристики
            </h4>

            <table className="w-full text-body-normal-medium-14 text-grey-60 text-left rtl:text-right text-gray-500">
              <tbody>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Класс</td>
                  <td className="px-4 py-2">Для работы и дома</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Диагональ экрана</td>
                  <td className="px-4 py-2">14 &quot;</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Процессор</td>
                  <td className="px-4 py-2"> Intel Pentium Silver</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Модель процессора</td>
                  <td className="px-4 py-2">Intel Pentium Silver N5000</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Частота процессора</td>
                  <td className="px-4 py-2">1.1 - 2.7 ГГц</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Объем оперативной памяти</td>
                  <td className="px-4 py-2">4 Gb</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Частота процессора</td>
                  <td className="px-4 py-2">1.1 - 2.7 ГГц</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Объем оперативной памяти</td>
                  <td className="px-4 py-2">4 Gb</td>
                </tr>
                <tr className="odd:bg-soft even:bg-white">
                  <td className="px-4 py-2">Частота процессора</td>
                  <td className="px-4 py-2">1.1 - 2.7 ГГц</td>
                </tr>
              </tbody>
            </table>
            {/* <MoreLinkBtn
              text="Смотреть все характеристики"
              className="text-secondary mt-5"
            /> */}
          </div>
          {/* <div>
            <h4 className="text-dark-grey mb-6 text-headings-h4-24">
              Описание товара
            </h4>
            <div className="grid gap-[21px] justify-items-start">
              <p className="text-dark-grey text-body-strong-medium-14">
                Металлический корпус
                <br />
                <br />
                <span className="text-body-normal-medium-14">
                  Vinga Iron S140 – качественный и надежный ноутбук, выполненный
                  в металлическом корпусе, что делает его невероятно прочным и
                  очень привлекательным в плане дизайна. Выглядит ноутбук просто
                  потрясающе. Компактность Данная модель позиционируется
                  производителем как удобное решение для ежедневной работы или
                  учебы...
                </span>
              </p>
              <p className="flex text-secondary gap-1 justify-end items-center md:text-label-normal-medium-14 text-label-normal-small-12">
                Смотреть еще <ChevronDownIcon width={20} height={20} />
              </p>
            </div>
          </div> */}
        </div>
        <div className="grid content-baseline items-start gap-8">
          <div>
            <div className="flex items-center gap-4 lg:gap-[124px]">
              <div
                style={{backgroundColor: "#C4C4C4"}}
                className="h-[57px] w-full lg:w-[308px]"
              ></div>
              <button className="flex min-w-max bg-soft text-primary px-3 py-1 rounded gap-2 text-xs lg:text-titles-normal-t-14 items-center">
                <CheckCircleIcon width={32} height={32} /> В наличии
              </button>
              <div className="flex gap-2 text-secondary">
                <HeartIcon width={24} height={24} />
                <ShoppingCartIcon width={24} height={24} />
              </div>
            </div>
          </div>

          <div
            style={{backgroundColor: "#C4C4C4"}}
            className="h-[89px] w-full lg:w-[665px] bg-gray-300"
          ></div>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="text-grey-40 text-sm lg:text-body-strong-small-12">
                <span className="line-through">27 900</span>
                <span className="text-xs lg:text-titles-normal-t-10">
                  {" "}
                  грн.
                </span>
              </p>
              <p className="text-label-normal-extra-large-22 text-red">
                27 300
                <span className="text-sm lg:text-label-normal-small-12">
                  {" "}
                  грн.
                </span>
              </p>
            </div>
            <PrimaryBtnFilled btnText="КУПИТЬ" />
            <PrimaryBtnOutlined btnText="КУПИТЬ В КРЕДИТ" />
          </div>

          <hr className="text-grey-10" />

          <div className="lg:-order-none grid gap-6 order-first">
            <div className="py-4 px-6 shadow-[0px_2px_10px_0px_#32324724] rounded">
              <p className="text-headings-h6-16 text-dark-grey mb-4">
                Доставка
              </p>
              <div className="grid gap-4">
                {Array.from({length: 5}).map((_, idx) => (
                  <div key={idx} className="flex flex-wrap items-center  gap-2">
                    <div className="flex items-center gap-2 w-full lg:w-[301px]">
                      <img src={`/delivery-icons/${idx + 1}.png`} alt="" />
                      <p className="text-titles-normal-t-14 text-dark-grey">
                        Самовывоз из магазина (Днепропетровск)
                      </p>
                    </div>
                    <p className="text-titles-normal-t-14 text-dark-grey">
                      Отправим сегодня
                    </p>
                    <p className="text-secondary ml-auto">Бесплатно</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4 px-6 shadow rounded">
              <p className="text-headings-h6-16 text-dark-grey mb-4">Оплата</p>
              <div className="grid gap-4">
                {Array.from({length: 3}).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img src={`/payment-icons/${idx + 1}.png`} alt="" />
                    <p className="text-dark-grey text-sm lg:text-body-normal-medium-14">
                      Оплата при получении товара, Google Pay, картой онлайн
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4 px-6 shadow rounded">
              <p className="text-headings-h6-16 text-dark-grey mb-4">
                Гарантия
              </p>
              <div className="grid gap-4">
                {Array.from({length: 2}).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img src={`/guarantee-icons/${idx + 1}.png`} alt="" />
                    <p className="text-dark-grey text-sm lg:text-body-normal-medium-14">
                      Обмен/возврат товара в течение 14 дней
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheaperProducts />
      <section className="max-container mt-12 mb-[24px]">
        <p className="text-headings-h4-24 mb-6 text-dark">
          Вместе с этим товаром покупают
        </p>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-y-[70px] gap-y-3">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <ProductCard idx={idx} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
