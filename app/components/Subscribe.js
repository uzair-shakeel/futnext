import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardBody } from "@nextui-org/react";
const Subscribe = () => {
  return (
    <Card
      className="bg-[#043F1D] mt-[64px] max-w-[784px] mx-auto rounded-[24px] p-[24px] z-50 relative  border-[#00CA55] border-[1px]"
      border-custom
    >
      <CardBody>
        <div className="flex justify-between items-center">
          <div className="max-w-[344px]">
            <h4 className="text-[#49DD87] text-[13px] leading-[15.73px] font-normal tracking-[-0.04em]">
              FUTnext Subscription
            </h4>
            <h2 className="text-[#EFEFEF] max-w-[288px] text-[32px] leading-[32px] tracking-[-0.04em] font-semibold mt-2">
              Get your subscription today
            </h2>
            <p className="text-white mt-2 text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            </p>
            <button className="flex items-center gap-2 mt-8 px-4 py-2 text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal bg-[#18A353] text-[#F4F4F4] rounded-[24px] h-[48px]">
              Subscribe Now{" "}
              <IoIosArrowForward className="text-[#F4F4F4] text-[24px]" />
            </button>
          </div>
          <div>
            <Image
              src="/assets/subscription.png"
              alt="Subscription"
              width={195}
              height={205}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Subscribe;
