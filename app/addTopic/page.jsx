"use client";

import { addTopic } from "@/services/topics/addTopic";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleAddTopic = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return alert("Title and Description needed.");
    }
    try {
      const res = await addTopic({ title, description });
      if (res) {
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log("Error adding topic: ", error);
    }
  };

  return (
    <form onSubmit={handleAddTopic} className="m-4 px-8 space-y-4">
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Enter Topic Title"
          className="border-2 border-slate-500 w-full px-8 py-2"
        />
      </div>
      <div>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder="Enter Topic Description"
          className="border-2 border-slate-500 w-full px-8 py-2"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-sm font-bold"
        >
          Add Topic
        </button>
      </div>
    </form>
  );
};

export default AddTopic;
