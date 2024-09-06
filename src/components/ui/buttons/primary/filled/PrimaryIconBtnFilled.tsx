import {SquaresPlusIcon} from "@heroicons/react/24/outline";
export default function PrimaryIconBtnFilled({btnText}: {btnText: string}) {
  return (
    <button className="flex items-center text-soft bg-primary py-[9px] px-3 text-label-strong-small-12 gap-2 rounded transition-all hover:bg-primary-hover active:bg-primary-active">
      {btnText}
      <SquaresPlusIcon color="#f4f8fb" width={24} height={24} />
    </button>
  );
}
