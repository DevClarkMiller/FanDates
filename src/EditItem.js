import { useEffect } from "react";
import {useParams, Link} from "react-router-dom"

const EditItem = ({
    items, editName, setEditName, editCourse, setEditCourse, editDate, setEditDate, editWeight, setEditWeight, handleEdit
}) =>{
    const {id} = useParams();

    const item = items.find(item => (item.id.toString()) === id);

    useEffect(() => {
        if(item){
            setEditName(item.name);
            setEditCourse(item.course);
            setEditDate(item.date);
            setEditWeight(item.weight);
        }
    }, [item, setEditName, setEditCourse, setEditDate, setEditWeight]);
    return(
        <main>
            {editName && 
                <>
                    
                    <form className="editForm" onSubmit={(e) => e.preventDefault()}>
                        <h1>Edit Item</h1>
                        <table className="editTable">
                            <thead>
                                <tr className="editHeader">
                                    <th>Course</th>
                                    <th>Name</th>
                                    <th>Due Date</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="editRow">
                                    <td><input 
                                        id="course" 
                                        type="text" 
                                        value={editCourse}
                                        onChange={(e) => setEditCourse(e.target.value)}
                                    /></td>

                                    <td><input 
                                        id="name" 
                                        type="text" 
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    /></td>

                                    <td><input 
                                        id="date" 
                                        type="date"
                                        value={editDate}
                                        onChange={(e) => setEditDate(e.target.value)}
                                    /></td>

                                    <td><input 
                                        id="weight" 
                                        type="text" 
                                        value={editWeight}
                                        onChange={(e) => setEditWeight(e.target.value)}
                                    /></td>
                                </tr>
                            </tbody>
                        </table>
                        

                        <button type="submit" onClick={()=> handleEdit(item)}>Submit</button>
                    </form>
                </>
            }
            
        </main>
    )
}

export default EditItem;