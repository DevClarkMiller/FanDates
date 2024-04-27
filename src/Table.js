import TableRow from './TableRow'
import { FaEdit } from 'react-icons/fa';
import { useState } from "react";

const Table = ({items, setItems}) =>{

    const [isMouseDown, setItMosuseDown] = useState(false);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    return(
        
        <table className="itemsTable">
            <thead>
                <tr className="itemHeader">
                    <th className="rankCol"><p className="itemData itemRank">Rank</p></th>
                    <th><p className="itemData">Course</p></th>
                    <th><p className="itemData">Name</p></th>
                    <th><p className="itemData">Due Date</p></th>
                    <th className="weightCol"><p className="itemData">Weight</p></th>
                </tr>
            </thead>
            
            <tbody>
                {items.map((item) => (
                    <TableRow 
                        onMouseDown={()=>alert("ckic")} 
                        key={item.id}
                        items={items}
                        item={item}
                        setItems={setItems}
                    />
                ))}
            </tbody>
            
        </table>
    )
}

export default Table;