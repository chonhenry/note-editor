import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OPTIONS as authOptions } from "../api/auth/[...nextauth]/route";
import PostItem from "@/components/PostItem";
import CreateNoteBtn from "@/components/CreateNoteBtn";

const postItems = [
  { title: "post title 1", date: "date 1" },
  { title: "post title 2", date: "date 2" },
  { title: "post title 3", date: "date 3" },
  { title: "post title 4", date: "date 4" },
  { title: "post title 5", date: "date 5" },
  { title: "post title 6", date: "date 6" },
];

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    // redirect("/api/auth/signin");
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="mb-5 w-full">
      <div className="max-w-[1100px] bg-blue200 px-10 mx-auto">
        <div className="mb-5 flex justify-between items-center text-md">
          <div className="flex items-center">
            <h1 className="mr-2 sm:mr-5 sm:text-3xl font-semibold">
              Your Notes
            </h1>
            <CreateNoteBtn userId={session!.user!.id} />
          </div>
          <button className="text-xs sm:text-lg sm:px-5 sm:py-2 px-3 py-1 rounded-lg border border-primary-dark dark:border-primary-light">
            Subscription
          </button>
        </div>

        <div className="border dark:border-third-light rounded-lg">
          {postItems.map((postItem, idx) => (
            <PostItem
              title={postItem.title}
              date={postItem.date}
              isLast={idx === postItems.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
