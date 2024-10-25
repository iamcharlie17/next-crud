"use client";

import { updateTopic } from "@/services/topics/updateTopic";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ title = "", description = "", id = "" }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await updateTopic(id, { newTitle, newDescription });
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleUpdate} className="m-4 px-8 space-y-4">
      <div>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          name="title"
          id="title"
          placeholder="Enter Topic Title"
          className="border-2 border-slate-500 w-full px-8 py-2"
        />
      </div>
      <div>
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          name="description"
          id="description"
          placeholder="Enter Topic Description"
          className="border-2 border-slate-500 w-full px-8 py-2"
        />
      </div>
      <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-sm font-bold">
          Update Topic
        </button>
      </div>
    </form>
  );
};

export default EditTopicForm;
