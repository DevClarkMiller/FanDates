import TableRow from './TableRow'
import { FaEdit } from 'react-icons/fa';

const Table = ({items, setItems}) =>{
    return(
        
        <table className="itemsTable">
            <thead>
                <tr className="itemHeader">
                    <th className="rankCol"><input className="itemData itemRank" readOnly type="text" value="Rank"/></th>
                    <th><input className="itemData" readOnly type="text" value="Course"/></th>
                    <th><input className="itemData" readOnly type="text" value="Name"/></th>
                    <th><input className="itemData" readOnly type="text" value="Due Date"/></th>
                    <th className="weightCol"><input className="itemData" readOnly type="text" value="Weight"/></th>
                </tr>
            </thead>
            
            <tbody>
                {items.map((item) => (
                    <TableRow 
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