import StudyOption from './StudyOption'
import { useState } from 'react';
const StudyWhat = ({
    items, setItems, handleSort, sort, setSort
}) =>{

    return(
        <div className="selectWhat">
            <h2 style={{fontWeight: 500}}>What should I study today?</h2>
            <div className="selectArea">
                <select
                    onChange={(e)=> setSort(e.target.value)}
                    >
                    <option value="sort" hidden selected>Sort By</option>
                    <option value="date">Date</option>
                    <option value="weight">Weight</option>
                    <option value="smart">Smart</option>
                </select>
                
                <select
                >
                    <option value="show" selected hidden>Show More</option>
                    <option value="all">All</option>
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