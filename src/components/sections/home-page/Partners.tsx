import MoreLinkBtn from "@/components/ui/buttons/link/MoreLinkBtn";
import Image from "next/image";

export default function Partners() {
  return (
    <>
      <p className="text-headings-h4-24 mt-12 text-dark mb-6">Партнеры</p>
      <div className="flex gap-x-[42px] items-center justify-between overflow-auto">
        {Array.from({length: 12}).map((_, idx) => (
          <Image
            key={idx}
            width={45}
            height={45}
            src="/partnersImgs/1.png"
            alt="partner image"
          />
        ))}
      </div>
      <MoreLinkBtn
        text="Все партнеры"
        className="text-secondary mt-[27px] mb-5"
      />
    </>
  );
}
