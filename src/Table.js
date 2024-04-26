import TableRow from './TableRow'
import { FaEdit } from 'react-icons/fa';

const Table = ({items, setItems}) =>{
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