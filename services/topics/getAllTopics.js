export const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch topics");
      return await res.json();  
    } catch (error) {
      console.log("Error fetching topics: ", error);
      return null;
    }
  };