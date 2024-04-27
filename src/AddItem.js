import {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddItem = ({handleSubmit, setNewName, setNewCourse, setNewDate, setNewWeight}) =>{
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
            </form>
        </main>
    )
}

export default AddItem