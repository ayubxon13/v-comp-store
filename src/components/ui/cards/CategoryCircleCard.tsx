import { Link } from "@/messages/navigation";

export default function CategoryCircleCard({id}: {id: number}) {
  return (
    <Link
      href={`/category/${id}`}
      className="grid gap-4 justify-center transform transition duration-300 hover:scale-110"
    >
      <div className="shadow-[0px_2px_10px_0px_#32324724] grid justify-items-center rounded-full lg:max-w-[242px] max-w-[156px] w-full lg:h-[242px] h-[156px]">
        <img
          className="my-auto"
          src="https://s3-alpha-sig.figma.com/img/d59c/f277/3c32bc39b91460069cfc22acb7068022?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaMV22iKJPC8p-iKTQlMJShtmY6J~0wkUTLOR1m2hHG0WFgzMHu-UhVeOLXzCBHL48VdmAs7xN2ttruKMl66sxZ4P1VYW2GBDg2~dHdFYwFP~gxGfmFcNlrmGxy1fyzq6DEomS0tkgrXjUz4WS3BH-SZHHw6TKxa3B2AFjXip6YhtdPkiaJS9QvvjQPKhqP0LWuyWnlo1-~7yqCytVW~yosKfioOP1xpzmpW8JQp35GqUzAsl46SUoHr6GEifomxOn7M5H9Yy6don4syErljYbqWxrXvtX96ROuutYWmHR~2I5TKXqJtsH0aUG6CFmyhQlgfCv~0ZiHbRuAEgvPxtw__"
          alt=""
        />
      </div>
      <p className="lg:text-titles-strong-t-16 text-titles-strong-t-14 text-dark-grey text-center">
        Материнские платы
      </p>
    </Link>
  );
}
