export const updateTopic = async (id, {newTitle, newDescription}) =>{
    if(!id) throw new Error("Id not found");

    try {
        const res = await fetch(`https://next-crud-lac-delta.vercel.app/api/topics/${id}`, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({newTitle, newDescription})
        })
        if(!res.ok) {
             throw new Error("Falied to update topic")
        }

        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}