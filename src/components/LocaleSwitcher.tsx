"use client";
import {useRouter, usePathname} from "@/messages/navigation";
import {useParams} from "next/navigation";
import {useTransition} from "react";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  console.log(isPending);

  const onChangeLang = (str: string) => {
    startTransition(() => {
      router.replace(
        // @ts-ignore
        {pathname, params},
        {locale: str}
      );
    });
  };

  const isActive = (locale: string) => params.locale === locale;

  return (
    <div className="flex items-center select-none gap-2 text-titles-normal-t-12">
      <p
        onClick={() => !isActive("ru") && onChangeLang("ru")}
        className={`text-soft cursor-pointer hover:text-opacity-70 ${
          isActive("ru") ? "opacity-60 cursor-default pointer-events-none" : ""
        }`}
      >
        RU
      </p>
      <p className="text-soft cursor-default">/</p>
      <p
        onClick={() => !isActive("uz") && onChangeLang("uz")}
        className={`text-soft cursor-pointer hover:text-opacity-70 ${
          isActive("uz") ? "opacity-60 cursor-default pointer-events-none" : ""
        }`}
      >
        UZ
      </p>
      <p className="text-soft cursor-default">/</p>
      <p
        onClick={() => !isActive("en") && onChangeLang("en")}
        className={`text-soft cursor-pointer hover:text-opacity-70 ${
          isActive("en") ? "opacity-60 cursor-default pointer-events-none" : ""
        }`}
      >
        EN
      </p>
    </div>
  );
}
