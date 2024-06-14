import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Upgrades = () => {
  return (
    <div className="w-full  mx-auto pb-[32px] px-[10%]">
      <div className="flex items-center justify-between w-full">
        <div>
          <h4 className="text-[#00CA55] text-[16px] leading-[19.36px] tracking-[-0.04em] font-medium">
            Evolution
          </h4>
          <h1 className="text-[36px] leading-[43.57px] tracking-[-0.04em] font-semibold text-[#F4F4F4] mt-1.5">
            Incisive Pass
            <span className="text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal"></span>
          </h1>
          <p className="text-[#E4E4E4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal mt-1.5">
            Overall: Max 90 | Pace: Max 91 | Shooting: Max 92 | PlayStyles: Max
            7 | PlayStyles+: Max 2 |
          </p>
          <div className="flex flex-col gap-2 mt-[24px]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/refresh.svg"
                alt="Refresh"
                width={32}
                height={32}
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/clock.svg"
                alt="Clock"
                width={32}
                height={32}
              />
              <h3 className="text-[#F4F4F4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
                6 Days Remaining
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/ut.svg"
                alt="UT Coin"
                width={32}
                height={32}
              />
              <h3 className="text-[#F4F4F4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
                13,000 Cost
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/chart-breakout.svg"
                alt="Chart Breakout"
                width={32}
                height={32}
              />
              <h3 className="text-[#F4F4F4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
                14,708 Solutions Generated
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-custom-bg rounded-[532px] bg-contain bg-no-repeat h-[400px]">
          <div className="bg-custom-bg1 object-cover bg-no-repeat w-[597px] flex items-center justify-center h-[475px]">
            <Image
              src="/assets/evolutions.png"
              alt="Image"
              width={320}
              height={356}
              className="h-[60%] max-h-[356px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrades;
