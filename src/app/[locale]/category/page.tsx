import CategoryCircleCard from "@/components/ui/cards/CategoryCircleCard";
import ProductCard from "@/components/ui/cards/ProductCard";

export default function Category() {
  return (
    <div className="max-container">
      <p className="lg:text-headings-h4-24 text-headings-h6-16 mt-12 mb-6 text-dark">
        Компьютерные комплектующие
      </p>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center mb-12 gap-x-4 gap-y-6">
        {Array.from({length: 12}).map((_, idx) => (
          <CategoryCircleCard id={idx} key={idx} />
        ))}
      </div>
      <p className="lg:text-headings-h4-24 text-headings-h6-16 mb-6 text-dark">
        Популярные товары
      </p>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-y-[70px] gap-y-3 mb-6">
        {Array.from({length: 6}).map((_, idx) => (
          <ProductCard key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
}
