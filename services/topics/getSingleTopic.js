export const getSingleTopic = async (id) => {
    try {
      const res = await fetch(`https://next-crud-lac-delta.vercel.app/api/topics/${id}`, {
        cache: "no-store",
      });
      return await res.json();  
    } catch (error) {
      console.log("Error fetching topics: ", error);
      return null;
    }
  };