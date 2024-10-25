export const deleteTopic = async(id) =>{
    try {
        const res = await fetch(`https://next-crud-lac-delta.vercel.app/api/topics?id=${id}`, {
            method: "DELETE"
        })
        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}