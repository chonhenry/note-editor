"use client";

import { useTheme } from "next-themes";
import Feature from "@/components/Feature";

const features = [
  {
    logo: "nextjs",
    name: "Next.js 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
  },
  {
    logo: "react",
    name: "React",
    description: "Server and Client Components. Use hook.",
  },
  {
    logo: "database",
    name: "Database",
    description: "ORM using Prisma and deployed on PlanetScale.",
  },
  {
    logo: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
  },
  {
    logo: "authentication",
    name: "Authentication",
    description: "Authentication using NextAuth.js and middlewares.",
  },
  {
    logo: "stripe",
    name: "Stripe",
    description: "Subscriptions service using Stripe.",
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="text-center py-5 sm:py-10 md:py-32 px-10 mx-auto max-w-[1200px]">
        <p className="text-2xl font-semibold sm:text-4xl md:text-7xl mb-10 dark:text-primary-light">
          Welcome to NoteEdit, your personalized digital hub for intuitive
          note-taking.
        </p>
        <button className="rounded-lg py-3 px-9 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark">
          Get Started
        </button>
      </section>

      <section className="text-center py-20 sm:py-32 px-10 mx-auto max-w-[1150px]">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-5xl mb-5 dark:text-primary-light">
          Features & Tech Stack
        </h1>

        <p className="md:mx-44 text-l dark:text-secondary-light">
          This website is a personal project that was built in my own interest.
          I built this project with the purpose of expanding my knowledge and
          skillsets as a software engineer and to learn new technologies.
          Following are the features and tech stack used in this project.
        </p>

        <div className="dark:bg-transparent mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Feature
              logo={feature.logo}
              name={feature.name}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
