import {useRef} from "react";

const AddItem = ({handleSubmit, setNewName, setNewCourse, setNewDate, setNewWeight}) =>{
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addName">Name</label>
            <input 
                className="nameField"
                id="addName"
                type="text"
                placeholder="Name" 
                required
                onChange={(e) => setNewName(e.target.value)}
            />
            <input 
                className="courseField"
                id="addCourse"
                type="text"
                placeholder="Course" 
                required
                onChange={(e) => setNewCourse(e.target.value)}
            />
            <input 
                className="dateField"
                id="addDate"
                type="date"
                required
                onChange={(e) => setNewDate(e.target.value)}
            />
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
    )
}

export default AddItem