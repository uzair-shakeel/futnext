import React from "react";
import Subscribe from "../components/Subscribe";
import Evolutions from "../components/Evolution";
import Cards from "../components/Cards";
const page = () => {
  return (
    <div>
      <Evolutions />
      <Cards />
      <Subscribe />
    </div>
  );
};

export default page;
