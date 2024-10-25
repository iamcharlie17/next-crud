export const getSingleTopic = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
      return await res.json();  
    } catch (error) {
      console.log("Error fetching topics: ", error);
      return null;
    }
  };