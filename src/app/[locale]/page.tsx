import LeftCategory from "@/components/LeftCategory";
import HomePageCommentsAndInstagram from "@/components/sections/home-page/HomePageCommentsAndInstagram";
import News from "@/components/sections/home-page/News";
import Partners from "@/components/sections/home-page/Partners";
import MoreLinkBtn from "@/components/ui/buttons/link/MoreLinkBtn";
import CircleCard from "@/components/ui/cards/CircleCard";
import ProductCard from "@/components/ui/cards/ProductCard";
import MainCarousel from "@/components/ui/carousels/MainCorousel";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/4129/8384/2d6c7aba0bbd215f9bddeeb771ca8b8f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUnjKxW9DVEli0hUP8vn8Kf1ftxzGQP9hAie9MEvP5h0zB4x-FBhPMBDOOUV5Sub1~WDJyknz-WXSmGrGcHJq-Smk0WvE-RiEaF2JmOE3EbVyUXxehJ0bxE8qgJxbgygiAA0jOawBDlOaMrf51~vSwQhe65QrwTjatVbvqxWt-JBryB6Mnd0bGWPd-0V3HCSKOCSXMhXVC2-Y~yTSfkeG6WrDFSBHc8fivgDaU-klZUo5~pK9n8RgOQrDaUtah7inXUQR6BdLqafWBabxNRTvjjrFpHgX1y1mGJ-2FywnDjvfiQwyiaclaWDgAL~6ysNYUJAwPB-gpFOOYDyPNTaMw__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/d89d/d0d6/ab71df25ad6770efbd8a92bc983893fc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJm0sEJfeRLepwAG5jQTMEd2DLYoh2HVr1Oxh1qy~fdCBr-MUl-45LmbI8nbwYQEjNRB4L3XV6ZlpUs6PrbQIfGksRjuXbxIEUXBew0jNQI9l2yE0t7DirT67f~pXHOjW6Z9S8oMZ2jTGER0egraCPP5uDcfNeTDazRBmTIcWOtN8gNES1GbE8y12yn4~v5rax7MvdkSMthP0nHMlgPChTAM3bU19WinFuAFI8FRswwo-7ZSSvjKesGiLcCZxuOhNYYHWfNUpVvHAcvP9DnBzMYpbqwbfVyGGbBx61StV7jgiTpu4xs0CGdF1I45wrGzbJsACxzsfnZA3GdQZqoZBg__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/73aa/09b2/a5ea0a2d1eff2f9a1263c82b3d5413e1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0vXWOxXDIZ7DhUiZs9D~6n9o~Gqu-qsuYWS6dwJp3ww0gfLi2t~lPklSevBCoNhCzqLE4RAkHmL1672E05qO8Fo7x6st4hZuTh3YXbh4yU~Y~F7MMJpbtddUpwXL-6GeJrcpOGuKLcRGhh3VxFBUV3t3lNFmAKawka6kximVMMFqHYpzvsDjeAo7MYjxsZGtQOLBgKoieqGmYb5BJfk5S7Rk53OPqIdy4hH3x0C4EiB3PTdp0nSsuM0pTNzO9vR1XRFkf8tnvKrh4y8KJd0NWKk6~RM3leTaCnPN2h2BjkfXkfrRyTfY2i2GNjvVzgX6BdugiWFs67IrE8JalOUQw__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b755/51d9/55e8f3030c467fb22ea3a7d6acc06fda?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CcH3XS9CweezY~mTBIVvsuALTdAn3ltikvV3qKPGAJ0GHS8qiE33sUJqu5LZg9GrrdlDF6wJDUwPB-ySImriAiPn~DGVdTpNSP5wxET7Ya2-QFE96pNV2cy5qY4Y07rhDmEooTyI39LCNZczJK6TGkaT6k-ncaTw~X8mwGzZ2il-N7pV3duTjIzhqDzjGV~vg55Ri2q0byiOtsyYpTnWgAcSrKxyZz0APij1zgQkPR-xjjU3g506fnuoZzAMTGQgx~~7kbPHH799stGOo6jjxqS7AR~uqvC7-lQ5W~P9FpbtcXzPzKX3GSDBnfutV50k8pa0KQl-fI1rN1OhdOe80A__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/75b4/d74d/01e9a4aa142ac117b0196b1dd3cd5a57?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECM21XTk7-mG8chm-X1DlF5v~xJ4-LwmkESYgC0Bu9nVEJnbKg-pOwgfpqa97atJD6Cii4J808Y2-rQ~eFUP-FMqvPWxVI-XGfvbKH5RYS79~LGUni7mleMRAHCxYov-h6iqjBx4XJDybZwq4c4RBN9H08Jtuxx~quqGBnbHgLHhsDcuRVJDgLfD6P17n8QIlFMTSv2D1eUDS6KN8otdSYpfFi0MCbdnwaEur-~~cz2pkH9BHpbCa11AERgkaAbRNZqmExxqtPMhtdS6XdX1uqdO~twQOuGDvw3VXPmxVbEjERo2dOfR2MeIDHLnpynY9VwePusCMY7ioK0~8fethw__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/d781/18d5/349de8b5460fd6936d5af2952d6f21c4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KSlOuFOD9b-uDeE58bdUgw5YlZTN7x-AmbLcYiOHTNUpBJdFnV40P0FdS8~Omcqtr~zd4~5CT09tKUgiXW1gPwJjM8s2h9sUZ2DP3JGxIV8~pcoP9jomBBE~JD5EZSEEXvmNYy4T62XtkYgZBNWlzqHctMt3pRYPBeTcarkw1q9aGy~mbaSZMA29XxL5MkBvI~zQ3TslLJrgtVq~woV-dZOdNv-Pnwm8WhNGgpKqNzsykJsVrX7i~lrTQWv9aAhpoE68aLGjRmPvDr4jeeokTJjpwUd4SDdN-a8JycBueg3oL-B3wjJaIBoEdW4F2bUF7X8f~kk37dX33TFTxBJ9dw__",
      title: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
      stars: 4,
      desc: 4,
      old_price: 3600,
      now_price: 3500,
    },
  ];
  return (
    <section>
      <div className="lg:max-container lg:mt-8 flex gap-4">
        <div className="flex-shrink-0 lg:block hidden w-max">
          <LeftCategory />
        </div>
        <div className="flex-grow overflow-hidden">
          <MainCarousel />
          <div className="flex max-container lg:mt-[46px] mt-4 gap-[58px] overflow-x-auto">
            {Array.from({length: 7}, (_, idx) => idx + 1).map((currentIdx) => (
              <div
                key={currentIdx}
                className="grid justify-items-center gap-[6px] max-w-[110px] shrink-0"
              >
                <Image
                  src={`/info/${currentIdx}.svg`}
                  width={60}
                  height={60}
                  alt="image"
                />
                <p className="text-center text-label-strong-extra-small-12 text-dark">
                  Бесплатная сборка
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="max-container mt-12 mb-[24px]">
        <p className="text-headings-h4-24 mb-6 text-dark">Топ продаж</p>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-y-[70px] gap-y-3">
          {data.map((_, idx) => (
            <ProductCard idx={idx} key={idx} />
          ))}
        </div>
        <MoreLinkBtn
          className="text-secondary pt-[27px]"
          text="Смотреть все товары"
        />
      </section>
      <section className="relative z-10 h-auto bg-[url('/gameZoneBg.jpeg')] bg-cover bg-center">
        <div
          style={{backgroundColor: "#22275E"}}
          className="absolute opacity-80 inset-0"
        ></div>
        <div className="max-container py-10 z-20 relative">
          <div className="flex gap-4 items-center text-white">
            <hr className="border-[2px] border-white md:w-[112px] w-full" />
            <p className="text-start md:max-w-max w-full md:text-headings-h2-32 text-headings-h5-20 min-w-max">
              GAME ZONE
            </p>
            <hr className="border-[2px] border-white w-full" />
          </div>
          <div className="my-6 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-y-[70px] gap-y-3">
            {Array.from({length: 6}).map((_, idx) => (
              <ProductCard key={idx} idx={idx} />
            ))}
          </div>

          <MoreLinkBtn className="text-white" text="Смотреть все товары" />

          <div className="md:mt-12 mt-3 z-20 relative lg:block hidden">
            <p className="md:text-headings-h4-24 text-headings-h6-16 md:mb-6 mb-[15px] text-white">
              Категории для геймеров
            </p>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              <CircleCard />
              <CircleCard />
              <CircleCard />
              <CircleCard />
              <CircleCard />
              <CircleCard />
            </div>
          </div>
        </div>
      </section>
      <div className="max-container">
        <HomePageCommentsAndInstagram />
        <Partners />
        <News />
        <div className="md:my-6 my-8 lg:mx-[129px]">
          <h3 className="md:text-headings-h3-28 text-headings-h5-20 md:mb-6 mb-3 text-dark">
            Магазин компьтерной техники и Аксессуар v-comp.com.ua
          </h3>
          <p className="md:text-body-normal-large-18 text-body-normal-medium-14">
            Интернет-магазин v-comp.com.ua – всеукраинский магазин компьютерной
            техники и комплектующих, в котором без труда Вы сможете найти
            подходящий Вам компьютер с минимальной стоимостью.
            <br />
            <br />
            Посетив наш интернет-магазин, Вы сможете приобрести компьютеры и
            комплектующие, которые есть у нас в наличии или осуществить их
            заказ.
            <br />
            <br />И в кротчайшие сроки Мы доставим товар приглянувшийся Вам.
            <br />
            <br />В базе электронного магазина v-comp.com.ua представлены тысячи
            актуальных товаров компьютерной техники: ноутбуки, мониторы, мыши,
            клавиатуры, материнские платы, процессоры; для работы с интернетом:
            сервера, модемы, роутеры, свич-кабеля, обжимные; для игр, отдыха и
            развлечений: суперовые gamebox сборки, game игровые видеокарты; для
            компании, офиса - офисные сборки. <br />
            <br />
            Мы подберем под Вас удобные недорогие компьютеры по Вашим целям и
            сделаем хорошие скидки, при оформлении покупки большого количества
            компьютеров.
            <br />
            <br />
            Ваша модель компьютера устарела, мы поможем модернизировать
            устаревшее оборудование. Подберем для Вас наилучшие компьютерные
            комплектующие по низким ценам. Наша команда Интернет-магазина
            v-comp.com.ua соберет для Вас любую сборку по Вашим потребностям, а
            случае, если Ваш компьютер, ноутбук, материнская плата, принтер,
            сканер, копир, МФУ или другие составные части вышли из строя,
            поломались. Не беда! Мы выявим проблему, починим, произведем ремонт
            или заменим деталь, оборудование на новое. И все это в одном месте,
            не нужно обходить большое количество магазинов, сервисных центров,
            ждать по две, три недели.
            <br />
            <br />
            Компьютерный Интернет-магазин v-comp.com.ua
          </p>
        </div>
      </div>
    </section>
  );
}
