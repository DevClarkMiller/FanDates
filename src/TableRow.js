import {useState, useEffect} from "react";
import { FaEdit } from 'react-icons/fa';

const TableRow = ({items, item, setItems}) =>{
    let itemIndex = items.indexOf(item);
    let rank = itemIndex + 1;


    return(
        <tr className="itemRow">
            
            <td className="rankCol"><p className="itemData itemRank">{rank}</p></td>

            <td><p className="itemData">{item.course}</p></td>


            <td><p className="itemData">{item.name}</p></td>


            <td><p className="itemData">{item.date} </p></td>


            <td className="weightCol"><p className="itemData">{item.weight} </p>
            <span><FaEdit className="editBtn"/></span></td>
        </tr>
    )
}

export default TableRow