import {StarIcon} from "@heroicons/react/24/solid";

export default function Stars() {
  return (
    <div className="grid grid-cols-5">
      <StarIcon color="#FFCD1B" width={12} height={12} />
      <StarIcon color="#FFCD1B" width={12} height={12} />
      <StarIcon color="#FFCD1B" width={12} height={12} />
      <StarIcon color="#D9D9D9" width={12} height={12} />
      <StarIcon color="#D9D9D9" width={12} height={12} />
    </div>
  );
}
