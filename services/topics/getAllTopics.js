export const getTopics = async () => {
    try {
      const res = await fetch("https://next-crud-lac-delta.vercel.app/api/topics", {
        next: {revalidate: 60}
      });
      if (!res.ok) throw new Error("Failed to fetch topics");
      return await res.json();  
    } catch (error) {
      console.log("Error fetching topics: ", error);
      return null;
    }
  };