"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  const handleSelect = (tab) => {
    setSelected(tab);
  };

  return (
    <div className="w-full mx-auto py-[32px] px-[6%]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[77px]">
          <div>
            <Image
              src="/assets/Logo.svg"
              alt="Logo"
              width={194.65}
              height={48}
              className="h-[48px] max-w-[196.65px]"
            />
          </div>
          <div>
            <ul className="flex items-center gap-[24px]">
              <li>
                <Link
                  href="/home"
                  onClick={() => handleSelect("Home")}
                  className={`py-[8px] px-[16px] text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal hover:rounded-[16px] hover:bg-[#434343] ${
                    selected === "Home"
                      ? "bg-[#434343] rounded-[16px] text-white"
                      : "text-[#F4F4F4]"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => handleSelect("SBC")}
                  className={`py-[8px] px-[16px] text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal hover:rounded-[16px] hover:bg-[#434343] ${
                    selected === "SBC"
                      ? "bg-[#434343] rounded-[16px] text-white"
                      : "text-[#F4F4F4]"
                  }`}
                >
                  SBC
                </Link>
              </li>
              <li>
                <Link
                  href="/evolutions"
                  onClick={() => handleSelect("Evolutions")}
                  className={`py-[8px] px-[16px] text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal hover:rounded-[16px] hover:bg-[#434343] ${
                    selected === "Evolutions"
                      ? "bg-[#434343] rounded-[16px] text-white"
                      : "text-[#F4F4F4]"
                  }`}
                >
                  Evolutions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => handleSelect("Packs")}
                  className={`py-[8px] px-[16px] text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal hover:rounded-[16px] hover:bg-[#434343] ${
                    selected === "Packs"
                      ? "bg-[#434343] rounded-[16px] text-white"
                      : "text-[#F4F4F4]"
                  }`}
                >
                  Packs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => handleSelect("Subscription")}
                  className={`py-[8px] px-[16px] text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal hover:rounded-[16px] hover:bg-[#434343] ${
                    selected === "Subscription"
                      ? "bg-[#434343] rounded-[16px] text-white"
                      : "text-[#F4F4F4]"
                  }`}
                >
                  Subscription
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="h-[48px] w-[96px] py-[16px] px-[24px] border border-white rounded-[36px] font-normal text-[14px] leading-[16.94px] tracking-[-0.04em] text-[#F4F4F4]">
            Discord
          </button>
          <button className="h-[48px] w-[96px] bg-[#61CF8F] text-[#032E16] py-[16px] px-[24px] rounded-[36px] font-normal text-[14px] leading-[16.94px] tracking-[-0.04em]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
