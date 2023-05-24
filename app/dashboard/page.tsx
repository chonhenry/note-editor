import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OPTIONS as authOptions } from "../api/auth/[...nextauth]/route";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    // redirect("/api/auth/signin");
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="bg-red200 w-full">
      <div className="max-w-[1100px] bg-blue200 px-10 mx-auto">
        <div className="flex justify-between items-center text-md">
          <div className="flex items-center">
            <h1 className="mr-2 sm:mr-5 sm:text-3xl font-semibold">
              Your Notes
            </h1>
            <button
              className="text-xs sm:text-lg sm:px-5 sm:py-2 px-3 py-1 rounded-lg bg-primary-dark text-primary-light 
                            dark:bg-primary-light dark:text-primary-dark"
            >
              + New Note
            </button>
          </div>
          <button className="text-xs sm:text-lg sm:px-5 sm:py-2 px-3 py-1 rounded-lg border border-primary-dark dark:border-primary-light">
            Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
