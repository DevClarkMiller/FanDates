import {useRef} from "react";
import { Link } from "react-router-dom";

const AddItem = ({handleSubmit, setNewName, setNewCourse, setNewDate, setNewWeight}) =>{
    return(
        <div className="addPage">
            <span
                style={{display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                gap: "25px"
            }}    
            >
                <p><Link to="/">Take me Home</Link></p>
                <h2>Add New Item</h2>
            </span>
            

            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addName">Add Name</label>
                <input 
                    className="nameField"   
                    id="addName"
                    type="text"
                    placeholder="Name" 
                    required
                    onChange={(e) => setNewName(e.target.value)}
                />
                <label htmlFor="courseField">Add Course</label>
                <input 
                    className="courseField"
                    id="addCourse"
                    type="text"
                    placeholder="Course" 
                    required
                    onChange={(e) => setNewCourse(e.target.value)}
                />
                <label htmlFor="dateField">Add Date</label>
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
                <button
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddItem