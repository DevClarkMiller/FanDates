import {useState, useEffect} from "react";
import { FaEdit } from 'react-icons/fa';

const TableRow = ({items, item, setItems}) =>{
    let itemIndex = items.indexOf(item);
    let rank = itemIndex + 1;


    return(
        <tr className="itemRow">
            <td className="rankCol"><input className="itemData itemRank" readOnly type="text" value={rank}/></td>
            <td><input className="itemData" type="text" value={item.course} 
            readOnly/></td>


            <td><input className="itemData" type="text" value={item.name} 
            readOnly/></td>


            <td><input className="itemData" type="text" value={item.date} 
            readOnly/></td>


            <td className="weightCol"><input className="itemData" type="text" value={item.weight} 
            readOnly/>
            <FaEdit className="editBtn"/></td>
        </tr>
    )
}

export default TableRow