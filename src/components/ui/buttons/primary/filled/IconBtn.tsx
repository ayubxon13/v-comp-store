import Image from "next/image";
import icon from "../../../../../../public/icons/catalog.svg";
export default function IconBtn({btnText}: {btnText: string}) {
  return (
    <button className="flex items-center text-soft bg-primary py-[9px] px-3 text-label-strong-small-12 gap-2 rounded transition-all hover:bg-primary-hover active:bg-primary-active">
      {btnText}
      <Image width={24} height={24} src={icon} alt="button icon" />
    </button>
  );
}
