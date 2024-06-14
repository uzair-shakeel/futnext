import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    // <div className=' relative w-full'>
    //     <div className='absolute top-[-250px] left-[32%] z-40'>
    //         <Subscribe/>
    //     </div>
    <div className="relative w-full  mx-auto pt-[154px] px-[6%] mt-[-100px] bg-custom-bg bg-contain bg-no-repeat">
      <div className="flex items-center justify-between mb-[40px]">
        <div className="max-w-[376px] flex flex-col gap-[16px]">
          <Image
            src="/assets/Logo.svg"
            alt="Logo"
            width={194}
            height={48}
            className="max-w-[194px] h-[48px]"
          />
          <p className="text-[#F4F4F4] text-[16px] leading-[19.36px] tracking-[-0.04em] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/assets/tiktok.svg"
                alt="Tiktok"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/instagram.svg"
                alt="Tiktok"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/twitter.svg"
                alt="Tiktok"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/discord.svg"
                alt="Tiktok"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/youtube.svg"
                alt="Tiktok"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-[32px]">
            <li>
              <Link
                href="/"
                className="w-[104px] text-[18px] leading-[21.78px] tracking-[-0.04em] font-normal"
              >
                SBC’s
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[104px] text-[18px] leading-[21.78px] tracking-[-0.04em] font-normal"
              >
                Evolutions
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[104px] text-[18px] leading-[21.78px] tracking-[-0.04em] font-normal"
              >
                Packs
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[104px] text-[18px] leading-[21.78px] tracking-[-0.04em] font-normal"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[104px] text-[18px] leading-[21.78px] tracking-[-0.04em] font-normal"
              >
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#F4F4F480] h-[2px]"></div>
      <p className="text-[14px] leading-[16.94px] font-normal tracking-[-0.04em] text-[#F4F4F480] py-[32px]">
        FUTnext 2024, All rights reserved
      </p>
    </div>
    // </div>
  );
};

export default Footer;
