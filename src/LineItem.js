import {FaTrashAlt, faTrash} from "react-icons/fa"

const LineItem = ({items, item, handleCheck, handleDelete}) =>{
    let rank = items.indexOf(item);
    return(
        <li className="item">
            <label
                className="itemRank"  
            >{rank + 1}.</label>

            <input type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            />
            <label
                className="itemLabel"
                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
            //Change it so that it's a text input instead so that you can edit
            >{item.course} | {item.name} | {item.date} | {item.weight}</label>
            <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                role="button" 
                tabIndex="0"
                arit-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem