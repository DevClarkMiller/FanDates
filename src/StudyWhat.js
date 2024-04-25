import StudyOption from './StudyOption'
import { useState } from 'react';

const StudyWhat = ({
    items, getCourseView, setGetCourseView, getSort, setGetSort, handleSort
}) =>{

    setGetCourseView('');
    setGetSort('');

    const handleSortChange = (e) =>{
        setGetSort(e.target.value);
    }

    const handleCourseViewChange = (e) =>{
        setGetCourseView(e.target.value);
    }

    return(
        <div className="selectWhat">
            <h2 style={{fontWeight: 500}}>What should I study today?</h2>
            <div className="selectArea">
                <select
                    value={getSort || ''}
                    onChange={handleSortChange}
                    defaultValue={{ label: "Select Dept", value: 0 }}
                >
                    <option selected disabled hidden>Sort By</option>
                    <option value="date">Date</option>
                    <option value="weight">Weight</option>
                    <option value="smart">Smart</option>
                </select>
                
                <select
                    value={getCourseView}
                    onChange={handleCourseViewChange}
                >
                    <option selected disabled hidden>Show More</option>
                    {items.map((item) => (
                    <StudyOption 
                        key={item.id}
                        item={item}
                    />
                ))}
                </select>
            </div>
        </div>
    )
}

export default StudyWhat;