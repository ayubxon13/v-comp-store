"use client";
import { useRouter, usePathname } from "@/messages/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";

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
        { pathname, params },
        { locale: str },
      );
    });
  };

  return (
    <div className="flex items-center gap-2 text-titles-normal-t-10">
      <p
        onClick={() => onChangeLang("ru")}
        style={{ opacity: params.locale === "ru" ? "0.6" : 1 }}
        className="text-soft"
      >
        RU
      </p>
      <p className="text-soft">/</p>
      <p
        style={{ opacity: params.locale === "uz" ? "0.6" : 1 }}
        onClick={() => onChangeLang("uz")}
        className="text-soft"
      >
        UZ
      </p>
      <p className="text-soft">/</p>
      <p
        style={{ opacity: params.locale === "en" ? "0.6" : 1 }}
        onClick={() => onChangeLang("en")}
        className="text-soft"
      >
        EN
      </p>
    </div>
  );
}
