import {ReactNode} from "react";

type thisProps = {
  icon?: ReactNode;
  btnText: string;
  className?: string;
};
export default function PrimaryBtnOutlined({
  btnText,
  icon,
  className,
}: thisProps) {
  return (
    <button
      className={`text-primary flex items-center bg-white py-[9px] px-3 text-label-strong-small-12 border-[2px] border-primary gap-2 rounded transition-all hover:bg-primary-hover active:bg-primary-active ${className}`}
    >
      {icon} {btnText}
    </button>
  );
}
