import {PaperAirplaneIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="xl:max-container">
        <div className="lg:mx-[129px] py-[30px] xl:block hidden">
          <div className="grid grid-cols-4 justify-between">
            <div className="text-soft">
              <h6 className="text-headings-h6-16 mb-4">Информация</h6>
              <div className="grid gap-3">
                <p>Акции</p>
                <p>Кредит</p>
                <p>Оплата и доставка</p>
                <p>Гарантия</p>
                <p>Частые вопросы</p>
                <p>Новости Блог</p> <p>О нас </p>
                <p>Политика конфиденциальности</p>
                <p>Контакты</p>
              </div>
            </div>
            <div className="text-soft">
              <h6 className="text-headings-h6-16 mb-4">Информация</h6>
              <div className="grid gap-3">
                <p>Акции</p>
                <p>Кредит</p>
                <p>Оплата и доставка</p>
                <p>Гарантия</p>
              </div>
            </div>
            <div className="text-soft">
              <h6 className="text-headings-h6-16 mb-4">Информация</h6>
              <div className="grid gap-3">
                <p>Акции</p>
                <p>Кредит</p>
                <p>Оплата и доставка</p>
                <p>Гарантия</p>
                <p>Гарантия</p>
                <p>Гарантия</p>
              </div>
            </div>
            <div className="text-soft">
              <h6 className="text-headings-h6-16 mb-5">Следите за нами</h6>
              <div className="flex gap-2">
                <div className="bg-soft rounded-full p-1">
                  <Image
                    width={32}
                    height={32}
                    src="/social-icons/1.png"
                    alt="social media icon"
                  />
                </div>
                <div className="bg-soft rounded-full p-1">
                  <Image
                    width={32}
                    height={32}
                    src="/social-icons/1.png"
                    alt="social media icon"
                  />
                </div>
                <div className="bg-soft rounded-full p-1">
                  <Image
                    width={32}
                    height={32}
                    src="/social-icons/1.png"
                    alt="social media icon"
                  />
                </div>
                <div className="bg-soft rounded-full p-1">
                  <Image
                    width={32}
                    height={32}
                    src="/social-icons/1.png"
                    alt="social media icon"
                  />
                </div>
                <div className="bg-soft rounded-full p-1">
                  <Image
                    width={32}
                    height={32}
                    src="/social-icons/1.png"
                    alt="social media icon"
                  />
                </div>
              </div>
              <h6 className="text-headings-h6-16 text-soft mt-8 mb-[6px]">
                Подписывайтесь на скидки
              </h6>
              <div className="relative w-[360px]">
                <input
                  type="email"
                  placeholder="Укажите ваш email..."
                  className="w-full text-grey-100 py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <PaperAirplaneIcon
                    width={32}
                    height={32}
                    className="text-secondary"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 mt-10">
            <hr className="text-soft opacity-50 border" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[30px]">
                <Image
                  width={159}
                  height={40}
                  src="/logo.png"
                  alt="site logo"
                />
                <p style={{fontSize: 12}} className="text-soft">
                  2008-2021 Интернет-магазин v-comp.com.ua Все права защищены
                </p>
              </div>
              <div>
                <Image
                  width={100}
                  height={32}
                  src="/visacard.png"
                  alt="visa card image"
                />
              </div>
            </div>
            <hr className="text-soft opacity-50 border" />
          </div>
        </div>
        <div className="xl:hidden block max-container">
          <div className="grid py-4 gap-4 justify-items-center">
            <Image width={124} height={124} src="/logo.png" alt="logo img" />
            <div className="max-w-[360px] w-full">
              <h6 className="text-headings-h6-16 text-soft mb-[6px]">
                Подписывайтесь на скидки
              </h6>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Укажите ваш email..."
                  className="text-grey-100 w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <PaperAirplaneIcon
                    width={32}
                    height={32}
                    className="text-secondary"
                  />
                </button>
              </div>
            </div>
            <Image
              width={100}
              height={32}
              src="/visacard.png"
              alt="visa card image"
            />
            <p style={{fontSize: 12}} className="text-soft text-center">
              2008-2021 Интернет-магазин v-comp.com.ua Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
