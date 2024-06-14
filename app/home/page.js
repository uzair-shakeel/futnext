import React from "react";
import GeneratedSolutions from "../components/GeneratedSolutions";
import Subscribe from "../components/Subscribe";
import Upgrades from "../components/Upgrades";

const page = () => {
  return (
    <div>
      <Upgrades />
      <GeneratedSolutions />
      <Subscribe />
    </div>
  );
};

export default page;
