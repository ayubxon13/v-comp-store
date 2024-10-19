import {ReactNode} from "react";

type thisProps = {
  icon?: ReactNode;
  btnText: string;
  className?: string;
};
export default function SecondaryBtnFilled({
  btnText,
  icon,
  className,
}: thisProps) {
  return (
    <button
      className={`text-soft bg-secondary py-[9px] px-3 text-label-strong-small-12 gap-2 rounded transition-all hover:bg-secondary-hover active:bg-secondary-active ${className}`}
    >
      {icon} {btnText}
    </button>
  );
}
