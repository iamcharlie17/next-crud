import EditTopicForm from "@/components/EditTopicForm";
import { getSingleTopic } from "@/services/topics/getSingleTopic";

const EditTopic = async ({ params }) => {
  const { id } =await params;
  const res = await getSingleTopic(id);
  const { title, description } = res;

  return <EditTopicForm id = {id} title={title} description={description} />;
};

export default EditTopic;
