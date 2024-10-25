import TopicList from "@/components/TopicList";
import { getTopics } from "@/services/topics/getAllTopics";
import { Suspense } from "react";

export default async function Home() {
  const topics = await getTopics();

  return (
    <Suspense fallback={<p>Loading topics...</p>}>
      <TopicList topics={topics} />
    </Suspense>
  );
}