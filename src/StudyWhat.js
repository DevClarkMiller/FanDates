import StudyOption from './StudyOption'
import { useState } from 'react';
const StudyWhat = ({
    items, setItems
}) =>{


    const handleSort = (sort) =>{
        let sortedItems = [...items];
        switch (sort){
          case "date":
            sortedItems.sort((a, b)=> (new Date(a.date)) - (new Date(b.date)));
            break;
          case "weight":
            sortedItems.sort((a, b)=> parseFloat(b.weight) - parseFloat(a.weight));
            break;
          case "smart":
            //sortedItems.sort((a, b)=> (' ' + a.name).localeCompare(b.name));
            sortedItems.sort((a, b)=> ((a.course).toLowerCase()).localeCompare((b.course).toLowerCase()));
            break;
          default:
            break;
        }
        setItems(sortedItems)
      }

    return(
        <div className="selectWhat">
            <h2 style={{fontWeight: 500}}>What should I study today?</h2>
            <div className="selectArea">
                <select 
                    onChange={(e)=> handleSort(e.target.value)}
                    >
                    <option selected hidden>Sort By</option>
                    <option value="date">Date</option>
                    <option value="weight">Weight</option>
                    <option value="smart">Smart</option>
                </select>
                
                <select
                    
                >
                    <option selected hidden>Show More</option>
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