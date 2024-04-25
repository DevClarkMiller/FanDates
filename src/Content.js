import StudyWhat from './StudyWhat'
import Table from './Table'
import DateNSync from './DateNSync'

const Content = ({
    items, handleCheck, handleDelete, handleSync, getCourseView, 
    setGetCourseView, getSort, setGetSort, handleSort
}) =>{
    return(
        (items.length) ? 
            <main>
                <DateNSync handleSync={handleSync}/>
                <StudyWhat
                    items={items}
                    getCourseView={getCourseView}
                    setGetCourseView={setGetCourseView}
                    getSort={getSort}
                    setGetSort={setGetSort}
                    handleSort={handleSort}
                ></StudyWhat>
                <Table
                    items={items}>
                </Table>
           </main>
        : <main>No courses found</main>
    )
}

export default Content