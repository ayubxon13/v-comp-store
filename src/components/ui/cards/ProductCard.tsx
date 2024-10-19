import {HeartIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import Stars from "../Stars";
import PrimaryBtnFilled from "../buttons/primary/filled/PrimaryBtnFilled";
import { Link } from "@/messages/navigation";

export default function ProductCard({idx}: {idx: number}) {
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
          src="https://s3-alpha-sig.figma.com/img/75b4/d74d/01e9a4aa142ac117b0196b1dd3cd5a57?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDms7Tp-7ucHHuzF-a3pJapsDLZ6JpaqJlAnxKY08JJFpMXFqUpIokoysNalPKzNCm64SGnEDvwCBXIIWV4zqBLs-8rSS-QHqc7nY7Re2jEFXOOOVAgxTONgdLr9kKCXKPEDhJHVOLwHSfVYvEOJ8KCHJB~crJv9fafvIjmz96s7YoEFylevORcliEcy~FRul814HFVr4js9QBjsLxqPv4OE0htlHQRn1KuN43ES6kZWOQCcGOs6BoY-iUjeWq9JJf7MQGoNF0f9Z5UZJdWtdqV9dbnjCPGEK9BdZwVxkOxP0q8fd~s3J6fKB3oKFE9gkV0KQ6txzGw5gxHxYjFJ6w__"
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
          <Link href={`/product/${idx}`}>
            <PrimaryBtnFilled className="sm:block hidden" btnText="КУПИТЬ" />
          </Link>
          <PrimaryBtnFilled
            className="sm:hidden block"
            icon={<ShoppingCartIcon width={24} height={24} />}
            btnText=""
          />
        </div>
      </div>
    </div>
  );
}
