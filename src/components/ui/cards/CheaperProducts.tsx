import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import PrimaryBtnFilled from "../buttons/primary/filled/PrimaryBtnFilled";

export default function CheaperProducts() {
  return (
    <div className="grid gap-6 my-12">
      <p className="text-headings-h4-24 text-dark-grey">Доставка</p>
      <div className="flex gap-x-7 justify-between">
        <ChevronLeftIcon
          className="my-auto md:block hidden text-secondary"
          width={24}
          height={24}
        />
        <div className="shadow-[0px_2px_10px_0px_#32324724] w-full md:p-6 p-3">
          <div className="lg:flex grid justify-between md:gap-9 gap-y-4">
            <div className="flex md:gap-6 gap-2">
              <img
                className="md:w-40 w-16"
                src="https://s3-alpha-sig.figma.com/img/cb0b/25b3/376b713178bebe180d8af71c1c2052b5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZM~ck0oVHoGHBMJNt742LgYqrv3FbiQqKhyNJQhRmNEf6XBdeOf4plY42qxitglSlwtvAdDoHEqpYoSEtaeyxLDdZuTcb26SX8-HvzvZ-uJ7cSO2rxmWE9-5LtzLt9DACfM49E85p5WS2yAearkOQZTCbQfewA5V3PVLSs0fvL~hUy2w6u0ASJ0SrKvaLwMky~fXWLHVla6e5wa7GeVvEEbzTajEGsMdpCXzoHo1QCPcCM3IxO49YpkW9erbSdwwfiv8KlaW3mJnoOS8jgUx1DJennJ~qEJhyQoi8Mic~WIz3IZcNOPUU~Mg31ViYcjAOqnwcYL5Us3EXZ~kmhXLg__"
                alt=""
              />
              <div className="grid gap-3 content-baseline">
                <p className="md:text-titles-normal-t-16 text-titles-normal-t-14 text-dark">
                  Процессор Intel Core i5-10400F, Box (BX8070110400F)
                  (BX8070110400F)
                </p>
                <div className="grid md:justify-start justify-end">
                  <p className="text-grey-40 line-through text-label-normal-extra-small-10">
                    3600{" "}
                    <span className="text-uppercase-extra-small-8">грн.</span>
                  </p>
                  <p className="text-titles-normal-t-18 text-red">
                    3500{" "}
                    <span className="text-label-normal-small-12">грн.</span>
                  </p>
                </div>
              </div>
            </div>
            <PlusIcon className="text-grey-40 md:w-6 md:h-6 w-3 h-3 m-auto" />
            <div className="flex md:gap-6 gap-2">
              <img
                className="md:w-40 w-16"
                src="https://s3-alpha-sig.figma.com/img/cb0b/25b3/376b713178bebe180d8af71c1c2052b5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZM~ck0oVHoGHBMJNt742LgYqrv3FbiQqKhyNJQhRmNEf6XBdeOf4plY42qxitglSlwtvAdDoHEqpYoSEtaeyxLDdZuTcb26SX8-HvzvZ-uJ7cSO2rxmWE9-5LtzLt9DACfM49E85p5WS2yAearkOQZTCbQfewA5V3PVLSs0fvL~hUy2w6u0ASJ0SrKvaLwMky~fXWLHVla6e5wa7GeVvEEbzTajEGsMdpCXzoHo1QCPcCM3IxO49YpkW9erbSdwwfiv8KlaW3mJnoOS8jgUx1DJennJ~qEJhyQoi8Mic~WIz3IZcNOPUU~Mg31ViYcjAOqnwcYL5Us3EXZ~kmhXLg__"
                alt=""
              />
              <div className="grid gap-3 content-baseline">
                <p className="md:text-titles-normal-t-16 text-titles-normal-t-14 text-dark">
                  Процессор Intel Core i5-10400F, Box (BX8070110400F)
                  (BX8070110400F)
                </p>
                <div className="grid md:justify-start justify-end">
                  <p className="text-grey-40 line-through text-label-normal-extra-small-10">
                    3600{" "}
                    <span className="text-uppercase-extra-small-8">грн.</span>
                  </p>
                  <p className="text-titles-normal-t-18 text-red">
                    3500{" "}
                    <span className="text-label-normal-small-12">грн.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-grey-10 my-4" />
          <div className="md:flex grid justify-center md:justify-between items-center">
            <p className="text-grey-40 md:order-1 order-2 text-body-normal-medium-14">
              Код комлекта: 1234567
            </p>
            <div className="md:flex grid md:order-2 order-1 items-center gap-6">
              <div className="grid gap-y-[6px] md:justify-items-end justify-items-center">
                <p className="text-label-strong-extra-large-24 text-dark">
                  3600 <span className="text-label-strong-medium-14">грн.</span>
                </p>
                <p className="text-body-normal-medium-14 text-primary-active">
                  Экономия: 200 грн.
                </p>
              </div>
              <PrimaryBtnFilled
                className="md:mb-0 mb-6 w-max"
                btnText="КУПИТЬ КОМПЛЕКТ"
              />
            </div>
          </div>
        </div>
        <ChevronRightIcon
          className="my-auto md:block hidden text-secondary"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
