const StudyOption = ({item}) =>{

    let course = (item.course).length <= 15 ?
    item.course : `${item.course.slice(0, 15)}...`
    return(
        <option value={item.course}>{course}</option>
    )
}

export default StudyOption;