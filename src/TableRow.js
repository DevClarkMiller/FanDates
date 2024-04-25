const TableRow = ({items, item}) =>{
    let rank = items.indexOf(item) + 1;
    return(
        <tr className="itemRow">
            <td className="rankCol"><input className="itemData itemRank" readOnly type="text" value={rank}/></td>
            <td><input className="itemData" readOnly type="text" value={item.course}/></td>
            <td><input className="itemData" readOnly type="text" value={item.name}/></td>
            <td><input className="itemData" readOnly type="text" value={item.date}/></td>
            <td className="weightCol"><input className="itemData" readOnly type="text" value={item.weight}/></td>
        </tr>
    )
}

export default TableRow