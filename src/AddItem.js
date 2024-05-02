import {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddItem = ({handleSubmit, setNewName, setNewCourse, setNewDate, setNewWeight, newCourse, newName, newDate, newWeight}) =>{
    const navigate = useNavigate(); //If you don't do this, will cause issue
    
    return(
        <main>
            <span
                style={{display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                gap: "25px"
            }}    
            >
                <h2>Add New Item</h2>
            </span>
            
            <form onSubmit={handleSubmit}>
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
                                id="name" 
                                type="text" 
                                value={newCourse}
                                onChange={(e) => setNewCourse(e.target.value)}
                            /></td>

                            <td><input 
                                id="course" 
                                type="text" 
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            /></td>

                            <td><input 
                                id="date" 
                                type="date"
                                value={newDate}
                                onChange={(e) => setNewDate(e.target.value)}
                            /></td>

                            <td><input 
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

            {/*<form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addName">Add Name</label>
                <input 
                    className="nameField"   
                    id="addName"
                    type="text"
                    placeholder="Name" 
                    required
                    onChange={(e) => setNewName(e.target.value)}
                />
                <label htmlFor="addCourse">Add Course</label>
                <input 
                    className="courseField"
                    id="addCourse"
                    type="text"
                    placeholder="Course" 
                    required
                    onChange={(e) => setNewCourse(e.target.value)}
                />
                <label htmlFor="addDate">Add Date</label>
                <input 
                    className="dateField"
                    id="addDate"
                    type="date"
                    required
                    onChange={(e) => setNewDate(e.target.value)}
                />
                <label htmlFor="addWeight">Add Weight</label>
                <input 
                    className="weightField"
                    id="addWeight"
                    type="text"
                    placeholder="Weight ex) 20%" 
                    required
                    onChange={(e) => setNewWeight(e.target.value)}
                />
                <button className="folBtn" type="submit">Add</button>
            </form>*/}
        </main>
    )
}

export default AddItem