
import Link from "next/link";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";

const TopicList = ({ topics }) => {
  if (!topics) {
    return <p>Error fetching topics. Please try again later.</p>;
  }

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="flex justify-between items-start p-4 m-4 border-2 border-slate-300 rounded-md shadow-lg"
        >
          <div>
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p>{t.description}</p>
          </div>
          <div className="flex gap-4">
            <RemoveButton id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <EditButton />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;