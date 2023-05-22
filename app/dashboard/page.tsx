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

  return <div>Dashboard</div>;
};

export default Dashboard;
