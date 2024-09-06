import {ArrowRightIcon} from "@heroicons/react/24/outline";

type thisProps = {
  text: string;
  className?: string;
};
export default function MoreLinkBtn({className, text}: thisProps) {
  return (
    <p
      className={`${className} flex gap-1 justify-end items-center md:text-label-normal-medium-14 text-label-normal-small-12`}
    >
      {text}
      <ArrowRightIcon width={20} height={20} />
    </p>
  );
}
