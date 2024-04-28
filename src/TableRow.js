import {useState, useEffect} from "react";
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const TableRow = ({items, item, setItems, isMouseDown, setIsMouseDown, downTimer, setDownTimer}) =>{
    let itemIndex = items.indexOf(item);
    let rank = itemIndex + 1;

    const navigate = useNavigate();

    const handleHold = (target) =>{
        //console.log(target)
        while(isMouseDown){
            setTimeout(()=>{

            }, 1000)
        }
    }

    

    return(
        <tr className="itemRow" onMouseDown={(e)=> handleHold(e.target)}>
            
            <td className="rankCol"><p className="itemData itemRank">{rank}</p></td>

            <td><p className="itemData">{item.course}</p></td>


            <td><p className="itemData">{item.name}</p></td>


            <td><p className="itemData">{item.date} </p></td>


            <td className="weightCol"><p className="itemData">{item.weight} </p>
            <span><FaEdit className="editBtn" onClick={() => navigate(`edit/${item.id}`)}/></span></td>
        </tr>
    )
}

export default TableRow