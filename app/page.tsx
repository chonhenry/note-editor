"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen bg-background flex-col items-center">
      <h1 className="text-black dark:text-white">hello world</h1>
      <hr />
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </main>
  );
}
