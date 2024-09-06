import MoreLinkBtn from "@/components/ui/buttons/link/MoreLinkBtn";
import Image from "next/image";

export default function News() {
  return (
    <section>
      <p className="text-headings-h4-24 mt-12 text-dark mb-6">Партнеры</p>
      <div className="overflow-x-auto pb-2">
        <div
          className="flex items-center gap-4 justify-between 
"
        >
          {Array.from({length: 4}).map((_, idx) => (
            <div
              key={idx}
              className="shadow-[0px_2px_10px_0px_#32324724] md:w-[371px] w-[242px] flex-shrink-0"
            >
              <Image
                src="/news/1.png"
                width={371}
                height={209}
                alt="news image"
              />
              <div className="p-2 grid gap-2">
                <p className="text-titles-strong-t-16  text-dark">
                  Вакансия! Требуется контент-менеджер
                </p>
                <p className="text-titles-normal-t-14 text-dark-grey">
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не сложная...
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-grey-20 text-label-normal-extra-small-10">
                    07.07.2021
                  </p>
                  <MoreLinkBtn
                    className="text-secondary"
                    text="Читать полностью"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MoreLinkBtn
        className="text-secondary md:mt-[27px] mt-[14px] mb-[29px]"
        text="Все новости"
      />
    </section>
  );
}
