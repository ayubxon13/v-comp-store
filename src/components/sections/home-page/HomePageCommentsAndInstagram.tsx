import MoreLinkBtn from "@/components/ui/buttons/link/MoreLinkBtn";
import Stars from "@/components/ui/Stars";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/outline";

export default function HomePageCommentsAndInstagram() {
  return (
    <>
      <div className="2xl:flex hidden justify-between mb-[29px] mt-12 gap-4">
        <div className="grid mx-auto max-w-[629px] w-full">
          <p className="text-headings-h4-24 text-dark mb-6">Отзывы</p>
          <div className="shadow-[0px_2px_10px_0px_#32324724] rounded gap-2 flex p-2">
            <img
              className="max-w-[70px] w-full h-[70px]"
              src="https://s3-alpha-sig.figma.com/img/0449/b1c0/ac98240b37ca9071e2ec15939191b2d5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhqtMYjJQNoGTTAdpvYH~pRpyHNCjkNjInBVyB5N3cYi-WOWQPg22dTfv4Y2Jo8o2-lgma0DCvKYRqu-5kbEVQzjVlWsXYcgjJRmi5Ap0qwGD4Bonvu7ReI1d04cIzuTVH7-UgqxgPEAHefnMruvvjZCla-k3VU64VESq3CkpV1U5dR0uqmzmhPZKNWT3N-dfV7aj6vX8-f887x6RCw8fu6EGytxHzNn4U3aM9jKeDUo2o-KFKYLZ4nNGk9qk-jkWGNnA~R5YFxjukibaUc7X-HABaX4Y6ZVZ9fs~k~5GUivZQFzPMzM~X3HKN2GxwVRVS7JTfYKBIo5BHJJsasyjQ__"
              alt=""
            />
            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <p className="text-titles-strong-t-18 text-dark">
                  Сергей Филимонов
                </p>
                <div className="flex items-center gap-2">
                  <ArrowLeftIcon
                    className="text-secondary"
                    width={12}
                    height={12}
                  />
                  <p className="text-label-normal-extra-small-10">3/6</p>
                  <ArrowRightIcon
                    className="text-secondary"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <p className="text-body-normal-medium-14 text-grey-60">
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов.
              </p>
              <div className="flex justify-between items-center">
                <Stars />
                <p className="text-body-normal-medium-14 text-grey-60">
                  07.04.2021
                </p>
              </div>
            </div>
            <p className="h-full border-l-2 border-grey-10"></p>
            <div className="grid gap-3 my-auto justify-items-center">
              <div className="grid gap-1">
                <p className="text-headings-h1-40 text-dark">4,7</p>
                <Stars />
              </div>
              <p className="text-label-normal-small-12 text-secondary mx-2 w-max text-center">
                532 отзыва на Google
              </p>
            </div>
          </div>

          <MoreLinkBtn
            className="text-secondary ml-auto mt-[27px]"
            text="Все отзывы на Google"
          />
        </div>
        <div className="grid">
          <p className="text-headings-h4-24 text-dark mb-6">Отзывы</p>
          <div className="flex shadow-[0px_2px_10px_0px_#32324724] p-2 justify-between items-center gap-2">
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
            <img
              className="max-w-[140px] w-full h-[140px]"
              src="https://s3-alpha-sig.figma.com/img/eeeb/ef61/f4dd1ffd506e95524267421caf96cd09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRlIzkijUHsm6ZM6uKZHHb1WSkH5QFK2bwu--ickKsTaci1z7aYjm5w6hpKTQ4ehO36ddA7pmylxidc-FJR2yN1wHNwjn9D4SsUV2c8hT5ZQ3mvyXM08uH5z8ON5czV0t~e7HlwerlewPcWiKCE7r5WhoOaj65vyVtCSAHYrSp-NwhOFSior94d4QlMA849VJF4WufPm9rpVDMNO-NwYF1LKOo57vsAOiqI-r8AP3g53lUauPExSc68nAjPMwGl8Go~nPcRTqg1VKOKUePjVcrRp2v9W0bScG28NXTyQwJEtbav7Nq1QTKU4o6YWslG9gTGE4mFesEdtevSikzHteA__"
              alt=""
            />
          </div>
          <MoreLinkBtn
            text="Перейти"
            className="ml-auto
mt-[27px] text-secondary"
          />
        </div>
      </div>
    </>
  );
}
