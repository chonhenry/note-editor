"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { TfiWrite } from "react-icons/tfi";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // const [showLoginModal, setShowLoginModal] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  const handleAuth = () => {
    if (status === "unauthenticated")
      return <span onClick={() => signIn()}>Login</span>;

    return <span onClick={() => signOut({ callbackUrl: "/" })}>Logout</span>;
  };

  return (
    <nav className="max-w-[1400px] mx-auto py-6 px-8 flex justify-between items-center select-none">
      <Link href="/">
        <div className="flex items-center text-md cursor-pointer text-primary-dark dark:text-primary-light">
          <span className="font-semibold mr-3">
            <TfiWrite />
          </span>
          <span className="font-semibold">NoteEditor</span>
        </div>
      </Link>
      <div className="flex items-center relative">
        <div
          className="cursor-pointer text-2xl mr-3 sm:mr-8"
          onClick={toggleTheme}
        >
          {theme === "light" ? <BsSun /> : <TbMoonStars />}
        </div>
        {status === "authenticated" && (
          <Image
            className="rounded-full mr-3 sm:mr-8"
            src={session.user?.image ?? ""}
            width={30}
            height={30}
            alt="avatar"
          />
        )}
        <div className="bg-primary-light dark:bg-secondary-dark cursor-pointer text-sm rounded-lg py-2 px-5">
          {status === "loading" ? <span>Loading</span> : handleAuth()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
