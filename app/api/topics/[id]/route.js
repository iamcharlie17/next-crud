import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  try {
    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTopic) {
      return NextResponse.json({ error: "Topic not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic Updated." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update topic." },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
    const {id} = params;
  try {
    await connectMongoDB();
    const result = await Topic.findOne({_id: id});

    if (!result) {
      return NextResponse.json(
        { message: "Topic not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get topic." },
      { status: 500 }
    );
  }
};
