"use client"

import { deleteTopic } from "@/services/topics/deleteTopic";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const RemoveButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const confirmed = confirm('Are you sure?')
      if (confirmed) {
        await deleteTopic(id);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-2xl text-red-500 font-bold">
      <button onClick={() => handleDelete(id)}>
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default RemoveButton;
