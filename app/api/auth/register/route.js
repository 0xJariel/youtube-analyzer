import { connectMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectMongoDB();
    await User.create({ name, email, password });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: "500" }
    );
  }
}
