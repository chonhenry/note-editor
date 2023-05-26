import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { OPTIONS } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(OPTIONS);
  console.log("session", session);
  if (session) return NextResponse.json(session);

  return NextResponse.json({ message: "not authenticated" });
}
