export const deleteTopic = async(id) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: "DELETE"
        })
        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}