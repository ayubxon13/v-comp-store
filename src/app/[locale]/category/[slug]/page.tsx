"use client";

import SecondaryBtnFilled from "@/components/ui/buttons/secondary/filled/SecondaryBtnFilled";
import ProductCard from "@/components/ui/cards/ProductCard";
import CategoryFilter from "@/components/ui/filter/CategoryFilter";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

type thisProps = {
  params: {
    slug: number;
  };
};
export default function CategorySinglePage({params}: thisProps) {
  return (
    <div className="max-container">
      <div className="md:flex grid gap-y-6 items-center justify-between mt-12 mb-6">
        <p className="lg:text-headings-h4-24 text-headings-h6-16 text-dark">
          Компьютерные комплектующие
        </p>
        <div className="gap-4 flex items-center">
          <SecondaryBtnFilled
            btnText=""
            icon={<FunnelIcon width={24} height={24} />}
            className="px-[23px] lg:hidden block"
          />
          <select
            className="w-[242px] px-2 py-[13px] border border-grey-10 rounded bg-white text-dark-grey text-titles-normal-t-12"
            name=""
            id=""
          >
            <option value="">По рейтингу</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <CategoryFilter />
        <div className="grid">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[7px] gap-y-4">
            {Array.from({length: 20}).map((_, idx) => (
              <ProductCard idx={idx} key={idx} />
            ))}
          </div>
          <div className="m-6 grid justify-center justify-items-center">
            <p className="text-titles-normal-t-14 mb-6 items-center gap-2 text-secondary flex">
              Показать больше товаров <ArrowPathIcon className="w-6 h-6" />
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-secondary flex items-center gap-2">
                <ArrowLeftIcon className="w-5 h-5" />
                <p className="text-titles-normal-t-14 md:block hidden">Назад</p>
              </div>
              <div className="flex flex-wrap">
                <div className="py-2 px-4 text-secondary">1</div>
                <div className="py-2 px-4 text-secondary">2</div>
                <div className="py-2 px-4 text-secondary">3</div>
                <div className="py-2 px-4 text-secondary">...</div>
                <div className="py-2 px-4 text-secondary">34</div>
              </div>
              <div className="text-secondary flex items-center gap-2">
                <p className="text-titles-normal-t-14 md:block hidden">
                  Вперед
                </p>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
