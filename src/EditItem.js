import { useEffect } from "react";
import {useParams, Link} from "react-router-dom"

const EditItem = () =>{
    const {id} = useParams();
    return(
        <main>

            <form>

            <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default EditItem;