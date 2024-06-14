import HomePage from "./home/page";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <NextThemesProvider>
          <HomePage />
        </NextThemesProvider>
      </NextUIProvider>
    </div>
  );
}
