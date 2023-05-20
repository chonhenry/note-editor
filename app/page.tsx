"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-black dark:text-white">hello world</h1>
      <hr />
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <div className="w-10 h-10 bg-background-dark"></div>
      <div className="w-10 h-10 bg-primary-dark"></div>
      <div className="w-10 h-10 bg-secondary-dark"></div>
      <div className="w-10 h-10 bg-primary-light"></div>
      <div className="w-10 h-10 bg-secondary-light"></div>
    </main>
  );
}
