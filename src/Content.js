import StudyWhat from './StudyWhat'
import Table from './Table'
import DateNSync from './DateNSync'
import {useState, useEffect} from "react";

const Content = ({
    items, setItems, handleDelete, handleSync, isMouseDown, setIsMouseDown, handleSort, sort, setSort
}) =>{

    const {downTimer, setDownTimer} = useState(0);

    //If the mouse is switched off and the down timer is less than 3, set down timer to 0
    useEffect(()=>{

    }, [isMouseDown]);  

    return(
        (items.length) ? 
            <main>
                <DateNSync handleSync={handleSync}/>
                <StudyWhat
                    items={items}
                    setItems={setItems}
                    handleSort={handleSort}
                    sort={sort}
                    setSort={setSort}
                ></StudyWhat>
                <Table
                    items={items}
                    setItems={setItems}
                    isMouseDown={isMouseDown}
                    setIsMouseDown={setIsMouseDown}
                    downTimer={downTimer}
                    setDownTimer={setDownTimer}
                    >
                </Table>
           </main>
        : <main>No courses found</main>
    )
}

export default Content