"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Select, SelectItem, Button } from "@nextui-org/react";
const GeneratedSolutions = () => {
  const coninsdata = [
    {
      id: 1,
      title: "Solution #1",
      generate: "Generated 6/3/24",
      cost: "13,000 Cost",
    },
    {
      id: 2,
      title: "Solution #2",
      generate: "Generated 6/4/24",
      cost: "14,000 Cost",
    },
    {
      id: 3,
      title: "Solution #3",
      generate: "Generated 6/5/24",
      cost: "15,000 Cost",
    },
    {
      id: 4,
      title: "Solution #4",
      generate: "Generated 6/6/24",
      cost: "16,000 Cost",
    },
    {
      id: 5,
      title: "Solution #5",
      generate: "Generated 6/7/24",
      cost: "17,000 Cost",
    },
    {
      id: 6,
      title: "Solution #6",
      generate: "Generated 6/8/24",
      cost: "18,000 Cost",
    },
    {
      id: 7,
      title: "Solution #7",
      generate: "Generated 6/9/24",
      cost: "19,000 Cost",
    },
    {
      id: 8,
      title: "Solution #8",
      generate: "Generated 6/10/24",
      cost: "20,000 Cost",
    },
    {
      id: 9,
      title: "Solution #9",
      generate: "Generated 6/11/24",
      cost: "21,000 Cost",
    },
    {
      id: 10,
      title: "Solution #10",
      generate: "Generated 6/12/24",
      cost: "22,000 Cost",
    },
    {
      id: 11,
      title: "Solution #11",
      generate: "Generated 6/13/24",
      cost: "23,000 Cost",
    },
    {
      id: 12,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 13,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 14,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 15,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 16,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 17,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 18,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 19,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 20,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 21,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 22,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 23,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 24,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 25,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 26,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 27,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 28,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 29,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 30,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 31,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 32,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 33,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 34,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 35,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 36,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 37,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
    {
      id: 38,
      title: "Solution #12",
      generate: "Generated 6/14/24",
      cost: "24,000 Cost",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coninsdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(coninsdata.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const items = [
    "Cheapest Items",
    "Cheapest Items 1",
    "Cheapest Items 2",
    "Cheapest Items 3",
  ];

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <h3
          key={i}
          className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer ${
            currentPage === i ? "bg-[#585A5C]" : "hover:bg-[#585A5C]"
          } rounded-lg`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </h3>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full mx-auto px-[6%]">
      {/* Header Content */}
      <div className="py-[24px] flex items-center justify-between">
        <div>
          <h2 className="text-[24px] leading-[29.05px] tracking-[-0.04em] font-normal text-[#F4F4F4]">
            Generated Solutions{" "}
            <span className="text-[16px] leading-[19.36px]">(150)</span>
          </h2>
          <p className="text-[14px] leading-[16.94px] tracking-[-0.04em] font-normal text-[#6B6B6B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          </p>
        </div>
        <div>
          <Select
            variant="bordered"
            placeholder="Most Cheapest"
            className="bg-transparent border border-[#7F7F7F] outline-none  rounded-[16px] w-[180px] "
          >
            <SelectItem
              className="text-[14px] font-normal leading-[16.94px] tracking-[-0.04em] bg-gray-700"
              style={{ padding: "10px" }}
            >
              Most Cheapest
            </SelectItem>
            <SelectItem
              className="text-[14px] font-normal leading-[16.94px] tracking-[-0.04em] bg-gray-700"
              style={{ padding: "10px" }}
            >
              Most Cheapest 1
            </SelectItem>
            <SelectItem
              className="text-[14px] font-normal leading-[16.94px] tracking-[-0.04em] bg-gray-700"
              style={{ padding: "10px" }}
            >
              Most Cheapest 2
            </SelectItem>
            <SelectItem
              className="text-[14px] font-normal leading-[16.94px] tracking-[-0.04em] bg-gray-700"
              style={{ padding: "10px" }}
            >
              Most Cheapest 3
            </SelectItem>
          </Select>
        </div>
      </div>

      {/* coninsdata Show using map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-8">
        {currentItems.map((item) => (
          <Button
            key={item.id}
            className="h-[72px] cursor-pointer hover:scale-[1.1] duration-250 p-[16px] bg-[#3B3C3D] text-white flex items-center justify-between rounded-[24px]"
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[16px] leading-[19.36px] font-medium tracking-[-0.04em] text-[#F4F4F4]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[15.73px] font-normal tracking-[-0.04em] text-[#FFFFFF99]">
                {item.generate}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/coins.svg"
                alt="coins"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[19.36px] font-normal tracking-[-0.04em] text-[#F4F4F4]">
                {item.cost}
              </p>
            </div>
          </Button>
        ))}
      </div>

      {/* pagination */}
      <div className="flex items-center justify-center w-full mt-[56px]">
        <div className="bg-[#25282B] w-auto h-[56px] rounded-[16px] flex items-center p-[16px] gap-[16px]">
          <IoIosArrowBack
            className={`w-[24px] h-[24px] ${
              currentPage === 1 ? "text-[#585A5C]" : "text-white"
            } cursor-pointer`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          />
          {renderPageNumbers()}
          <IoIosArrowForward
            className={`w-[24px] h-[24px] ${
              currentPage === totalPages ? "text-[#585A5C]" : "text-white"
            } cursor-pointer`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratedSolutions;
