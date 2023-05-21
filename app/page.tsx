"use client";

import Feature from "@/components/Feature";
import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";

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
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <main className="">
      <section className="text-center py-5 sm:py-10 md:py-32 px-10 mx-auto max-w-[1200px]">
        <p className="text-2xl font-semibold sm:text-4xl md:text-7xl mb-10 dark:text-primary-light">
          Welcome to <span className="italic">NoteEdit</span>, your personalized
          digital hub for intuitive note-taking.
        </p>
        <button className="rounded-lg py-3 px-9 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark">
          Get Started
        </button>
      </section>

      <section className="text-center pb-20 mt-10 sm:mt-0 sm:pb-32 px-10 mx-auto max-w-[1150px]">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-5xl mb-5 dark:text-primary-light">
          Features & Tech Stack
        </h1>

        <p className="md:mx-44 text-l text-secondary-light">
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

      <section className="text-center pb-20 sm:pb-32 px-10 mx-auto max-w-[1150px]">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-5xl mb-5 dark:text-primary-light">
          Pricing Plans
        </h1>
        <p className="text-secondary-light">
          Choose a plan based on your needs.
        </p>
        <div className="w-full mt-5 flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch">
          <div className="text-left p-5 w-full mb-5 sm:mb-0 sm:mr-10 border rounded-lg dark:border-secondary-light flex flex-col">
            <div className="text-xl font-semibold mb-2">Free</div>
            <ul className="text-sm text-secondary-light list-disc flex-auto">
              <li className="ms-3">
                Basic note creation and editing: Write and save simple notes.
              </li>
              <li className="ms-3">Limited storage: Store up to 5 notes.</li>
            </ul>
            <button className="bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark w-full rounded-md mt-5 py-2">
              Choose
            </button>
          </div>

          <div className="text-left p-5 w-full mb-5 sm:mb-0 border rounded-lg dark:border-secondary-light flex flex-col">
            <div className="text-xl font-semibold mb-2">Pro - $4.99/mo</div>
            <ul className="text-sm text-secondary-light list-disc flex-auto">
              <li className="ms-3">All Free Plan Features</li>
              <li className="ms-3">
                Unlimited storage: Store an unlimited number of notes.
              </li>
              <li className="ms-3">
                Advanced note creation and editing: Use rich text formatting,
                insert images, and more.
              </li>
            </ul>
            <button className="bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark w-full rounded-md mt-5 py-2">
              Choose
            </button>
          </div>
        </div>
      </section>

      <footer className="text-secondary-light text-center p-5 flex flex-col sm:flex-row items-center justify-center">
        <div className="mb-5 sm:mr-10 sm:mb-0">
          The source code is available on my GitHub.
        </div>
        <div className="text-xl cursor-pointer" onClick={toggleTheme}>
          {theme === "light" ? <BsSun /> : <TbMoonStars />}
        </div>
      </footer>
    </main>
  );
}
