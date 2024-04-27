import StudyWhat from './StudyWhat'
import Table from './Table'
import DateNSync from './DateNSync'

const Content = ({
    items, setItems, handleDelete, handleSync
}) =>{
    return(
        (items.length) ? 
            <main>
                <DateNSync handleSync={handleSync}/>
                <StudyWhat
                    items={items}
                    setItems={setItems}
                ></StudyWhat>
                <Table
                    onMouseDown={()=>alert("test")}
                    items={items}
                    setItems={setItems}>
                </Table>
           </main>
        : <main>No courses found</main>
    )
}

export default Content