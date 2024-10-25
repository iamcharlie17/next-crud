export const addTopic = async ({ title, description }) => {
  const response = await fetch("https://next-crud-lac-delta.vercel.app/api/topics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) throw new Error("Failed to add topic");

  return response.json();
};
