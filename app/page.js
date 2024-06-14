import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GeneratedSolutions from "./components/GeneratedSolutions";
import Subscribe from "./components/Subscribe";
import Upgrades from "./components/Upgrades";
import HomePage from "./home/page";
import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <HomePage />
      </NextUIProvider>
      {/* <Navbar/> */}
      {/* <Upgrades /> */}
      {/* <GeneratedSolutions /> */}
      {/* <Subscribe /> */}
      {/* <Footer/> */}
    </div>
  );
}
