"use client";

import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <footer className="text-secondary-light text-center p-5 flex flex-col sm:flex-row items-center justify-center">
      <div className="mb-5 sm:mr-10 sm:mb-0">
        The source code is available here.
      </div>
      <div className="text-xl cursor-pointer" onClick={toggleTheme}>
        {theme === "light" ? <BsSun /> : <TbMoonStars />}
      </div>
    </footer>
  );
};

export default Footer;
