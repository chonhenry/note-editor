"use client";

import { useTheme } from "next-themes";
import { TfiWrite } from "react-icons/tfi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="max-w-[1400px] mx-auto py-6 px-8 flex justify-between relative">
      <div className="flex items-center text-lg cursor-pointer text-primary-dark dark:text-secondary-light">
        <span className="font-semibold mr-3">
          <TfiWrite />
        </span>
        <span className="font-semibold">Taxanomy</span>
      </div>
      <div className="bg-secondary-light dark:bg-secondary-dark cursor-pointer text-sm rounded-lg py-2 px-5">
        Login
      </div>
      <div className="absolute start-[170px]">
        <button className="mr-3" onClick={() => setTheme("light")}>
          Light
        </button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>
    </nav>
  );
};

export default Navbar;
