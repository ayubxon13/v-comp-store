import {ReactNode} from "react";

type thisProps = {
  icon?: ReactNode;
  btnText: string;
  className?: string;
};
export default function PrimaryBtnFilled({
  btnText,
  icon,
  className,
}: thisProps) {
  return (
    <button
      className={`text-soft flex items-center bg-primary py-[9px] px-3 text-label-strong-small-12 gap-2 rounded transition-all hover:bg-primary-hover active:bg-primary-active ${className}`}
    >
      {icon} {btnText}
    </button>
  );
}
