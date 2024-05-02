import {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddItem = ({handleSubmit, setNewName, setNewCourse, setNewDate, setNewWeight, newCourse, newName, newDate, newWeight}) =>{
    const navigate = useNavigate(); //If you don't do this, will cause issue
    
    return(
        <main>
            <span
                style={{display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: "25px"
            }}    
            >
                <h2>Add New Item</h2>
            </span>
            
            <form className="editForm" onSubmit={handleSubmit}>
                <table className="createTable">
                    <tbody>
                        <tr className="editHeader">
                            <th>Course</th>
                            <td><input 
                                placeholder="Add Course ex) 'C++'"
                                id="course" 
                                type="text" 
                                value={newCourse}
                                onChange={(e) => setNewCourse(e.target.value)}
                            /></td>
                        </tr>

                        <tr className="editHeader">
                            <th>Name</th>
                            <td><input 
                                placeholder="Add Item Name ex) 'Quiz 3'"
                                id="name" 
                                type="text" 
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            /></td>
                        </tr>

                        <tr className="editHeader">
                            <th>Due Date</th>
                            <td><input 
                                id="date" 
                                type="date"
                                value={newDate}
                                onChange={(e) => setNewDate(e.target.value)}
                            /></td>
                        </tr>

                        <tr className="editHeader">
                            <th className="lastEditTh">Weight</th>
                            <td><input 
                                placeholder="Add Weight ex) '15%'"
                                id="weight" 
                                type="text" 
                                value={newWeight}
                                onChange={(e) => setNewWeight(e.target.value)}
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <button className="folBtn" type="submit">Add</button>
            </form>
        </main>
    )
}

export default AddItem