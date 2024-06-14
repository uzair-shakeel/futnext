import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Upgrades = () => {
  return (
    <div className="w-full  mx-auto pb-[32px] px-[10%]">
      <div className="flex items-center justify-between w-full">
        <div>
          <h4 className="text-[#00CA55] text-[16px] leading-[19.36px] tracking-[-0.04em] font-medium">
            Upgrades
          </h4>
          <h1 className="text-[36px] leading-[43.57px] tracking-[-0.04em] font-semibold text-[#F4F4F4] mt-1.5">
            Weekly 90+ TOTS Player Pick{" "}
            <span className="text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
              {" "}
              (Avg Return 200,00K)
            </span>
          </h1>
          <p className="text-[#E4E4E4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal mt-1.5">
            Earn 1 of 3 rare gold players rated 85 overall or higher
          </p>
          <div className="flex flex-col gap-2 mt-[24px]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/refresh.svg"
                alt="Refresh"
                width={32}
                height={32}
              />
              <h3 className="text-[#787878] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
                Non-Repeatable
              </h3>
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
          <button className="flex items-center gap-2 mt-8 px-4 py-2 text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal bg-[#18A353] text-[#F4F4F4] rounded-[24px] h-[48px]">
            Generate Unique Solutions{" "}
            <IoIosArrowForward className="text-[#F4F4F4] text-[24px]" />
          </button>
        </div>
        <div className="bg-custom-bg rounded-[532px] bg-contain bg-no-repeat h-[400px]">
          <div className="bg-custom-bg1 object-cover bg-no-repeat w-[597px] flex items-center justify-center  h-[475px]">
            <Image
              src="/assets/Upgrades.png"
              alt="Image"
              width={320}
              height={356}
              className="h-[85%] max-h-[356px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrades;
