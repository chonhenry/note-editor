"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return <main className="flex flex-col items-center h-screen"></main>;
}
