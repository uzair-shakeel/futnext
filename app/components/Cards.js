"use client";
import React, { useState } from "react";
import { Chip, Card, CardBody, Button } from "@nextui-org/react";

const Cards = () => {
  const [selectedTab, setSelectedTab] = useState("Levels");

  return (
    <div className="px-[6%]">
      <div className="w-full border-b border-[#F4F4F4] my-14">
        <button
          className={`font-[600] text-[20px] p-4 ${
            selectedTab === "Levels" ? "border-b-3 border-[#00CA55]" : ""
          }`}
          onClick={() => setSelectedTab("Levels")}
        >
          Levels
        </button>
        <button
          className={`font-[400] text-[20px] p-4 ${
            selectedTab === "Players"
              ? "border-b-3 border-[#00CA55]"
              : "text-[#F4F4F4]/50"
          }`}
          onClick={() => setSelectedTab("Players")}
        >
          Players
        </button>
      </div>
      {selectedTab === "Levels" && (
        <div className="flex w-full gap-8">
          <Card className="bg-[#17191B] p-4 max-w-[512px] border-[#00CA55] border-[1px] text-white">
            <CardBody>
              <h3 className="text-[24px] font-[600]">Level 1</h3>
              <p className="text-[20px] font-[500] py-[16px]">Upgrades</p>
              <div className="flex text-white gap-3 flex-wrap">
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Playstyle: Trickster
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Overall: +2
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Pace: +1
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Passing: +1
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Rarity: In-Progress Evolution
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Shooting: +2
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Defending: +3
                </Chip>
              </div>
              <div className="pt-3 space-y-[16px]">
                <p className="text-[20px] font-[500] py-[16px]">Objectives</p>
                <div className="flex items-center gap-[7px]">
                  <div className="w-[40px]">
                    <button className="bg-[#02421D] rounded-[50%] w-10 h-10 text-[18px] font-[500] text-[#00CA55]">
                      1
                    </button>
                  </div>
                  <p className="text-[16px] font-[400]">
                    Play 3 matches in any mode using your active EVO player in
                    game
                  </p>
                </div>
                <div className="flex items-center gap-[7px]">
                  <div className="w-[40px]">
                    <button className="bg-[#02421D] rounded-[50%] w-10 h-10 text-[18px] font-[500] text-[#00CA55]">
                      2
                    </button>
                  </div>
                  <p className="text-[16px] font-[400]">
                    Win 2 Squad Battles (or Rivals/Champions) matches on min.
                    Semi-Pro using your active EVO player in game
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-[#17191B] p-4 max-w-[512px] border-[#00CA55] border-[1px] text-white">
            <CardBody>
              <h3 className="text-[24px] font-[600]">Level 1</h3>
              <p className="text-[20px] font-[500] py-[16px]">Upgrades</p>
              <div className="flex text-white gap-3 flex-wrap">
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Playstyle: Trickster
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Overall: +2
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Pace: +1
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Passing: +1
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Rarity: In-Progress Evolution
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Shooting: +2
                </Chip>
                <Chip className="bg-[#434343] text-white text-[14px] font-[400]">
                  Defending: +3
                </Chip>
              </div>
              <div className="pt-3 space-y-[16px]">
                <p className="text-[20px] font-[500] py-[16px]">Objectives</p>
                <div className="flex items-center gap-[7px]">
                  <div className="w-[40px]">
                    <button className="bg-[#02421D] rounded-[50%] w-10 h-10 text-[18px] font-[500] text-[#00CA55]">
                      1
                    </button>
                  </div>
                  <p className="text-[16px] font-[400]">
                    Play 3 matches in any mode using your active EVO player in
                    game
                  </p>
                </div>
                <div className="flex items-center gap-[7px]">
                  <div className="w-[40px]">
                    <button className="bg-[#02421D] rounded-[50%] w-10 h-10 text-[18px] font-[500] text-[#00CA55]">
                      2
                    </button>
                  </div>
                  <p className="text-[16px] font-[400]">
                    Win 2 Squad Battles (or Rivals/Champions) matches on min.
                    Semi-Pro using your active EVO player in game
                  </p>
                </div>
                <div className="flex items-center gap-[7px]">
                  <div className="w-[40px]">
                    <button className="bg-[#02421D] rounded-[50%] w-10 h-10 text-[18px] font-[500] text-[#00CA55]">
                      3
                    </button>
                  </div>
                  <p className="text-[16px] font-[400]">
                    Assist 3 goals using your active EVO player in Squad Battles
                    (or Rivals/Champions) on min. Semi-Pro
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
      {selectedTab === "Players" && (
        <div className="flex w-full gap-8">
          {/* Add content for Players tab here */}
        </div>
      )}
    </div>
  );
};

export default Cards;
