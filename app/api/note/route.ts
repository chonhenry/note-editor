import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(OPTIONS);

    console.log(session);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const body = await req.json();

    const note = await prisma.note.create({
      data: {
        title: body.title,
        userId: session!.user!.id,
      },
    });
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json({ message: "error creating new note" });
  }
}
