"use client";

import { useTheme } from "next-themes";
import { TfiWrite } from "react-icons/tfi";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <nav className="max-w-[1400px] mx-auto py-6 px-8 flex justify-between">
      <div className="flex items-center text-md cursor-pointer text-primary-dark dark:text-primary-light">
        <span className="font-semibold mr-3">
          <TfiWrite />
        </span>
        <span className="font-semibold">NoteEditor</span>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer mr-5 text-2xl" onClick={toggleTheme}>
          {theme === "light" ? <BsSun /> : <TbMoonStars />}
        </div>
        <div className="bg-primary-light dark:bg-secondary-dark cursor-pointer text-sm rounded-lg py-2 px-5">
          Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
