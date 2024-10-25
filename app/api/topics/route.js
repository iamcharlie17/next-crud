import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create topic." },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectMongoDB();
    const result = await Topic.find();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get topics." },
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json(
      { message: "ID required to delete." },
      { status: 400 }
    );

  try {
    await connectMongoDB();
    const result = await Topic.findByIdAndDelete(id);
    if (!result)
      return NextResponse.json(
        { message: "Topic not found!!" },
        { status: 404 }
      );

    return NextResponse.json({ message: "Topic deleted." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete topic." },
      { status: 500 }
    );
  }
};
