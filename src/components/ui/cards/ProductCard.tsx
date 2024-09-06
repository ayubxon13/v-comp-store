import {HeartIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import PrimaryNormalBtnFilled from "../buttons/primary/filled/PrimaryNormalBtnFilled";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import Stars from "../Stars";

export default function ProductCard() {
  return (
    <div className="bg-white">
      <div className="flex justify-between mt-2 mb-3">
        <Image src="/icons/new.svg" width={76} height={24} alt="new image" />
        <div className="mr-3">
          <HeartIcon className="text-secondary" width={24} height={24} />
        </div>
      </div>
      <div className="grid gap-3 p-3">
        <img
          className="sm:max-w-[218px] max-w-[134px] mx-auto w-full sm:h-[214px] h-[134px]"
          src="https://s3-alpha-sig.figma.com/img/4129/8384/2d6c7aba0bbd215f9bddeeb771ca8b8f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUnjKxW9DVEli0hUP8vn8Kf1ftxzGQP9hAie9MEvP5h0zB4x-FBhPMBDOOUV5Sub1~WDJyknz-WXSmGrGcHJq-Smk0WvE-RiEaF2JmOE3EbVyUXxehJ0bxE8qgJxbgygiAA0jOawBDlOaMrf51~vSwQhe65QrwTjatVbvqxWt-JBryB6Mnd0bGWPd-0V3HCSKOCSXMhXVC2-Y~yTSfkeG6WrDFSBHc8fivgDaU-klZUo5~pK9n8RgOQrDaUtah7inXUQR6BdLqafWBabxNRTvjjrFpHgX1y1mGJ-2FywnDjvfiQwyiaclaWDgAL~6ysNYUJAwPB-gpFOOYDyPNTaMw__"
          alt=""
        />
        <p className="sm:text-titles-normal-t-14 text-titles-normal-t-12 text-dark-grey">
          Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)
        </p>
        <div className="flex gap-x-2 items-center">
          <Stars />
          <p style={{color: "#999999", fontSize: "11px"}}>Отзывов: 4</p>
        </div>
        <div className="flex items-center justify-between py-[3.5px]">
          <div>
            <p className="text-grey-40 line-through text-label-normal-extra-small-10">
              3600 <span className="text-uppercase-extra-small-8">грн.</span>
            </p>
            <p className="text-titles-normal-t-18 text-red">
              3500 <span className="text-label-normal-small-12">грн.</span>
            </p>
          </div>
          <PrimaryNormalBtnFilled
            className="sm:block hidden"
            btnText="КУПИТЬ"
          />
          <PrimaryNormalBtnFilled
            className="sm:hidden block"
            icon={<ShoppingCartIcon width={24} height={24} />}
            btnText=""
          />
        </div>
      </div>
    </div>
  );
}
