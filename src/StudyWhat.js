import StudyOption from './StudyOption'
import { useState } from 'react';
const StudyWhat = ({
    items, setItems
}) =>{

    const balancedSort = (a, b) =>{
      let weightLhs;
      let weightRhs;

      const daysLhs = parseInt(Math.floor((new Date(a.date) - new Date()) / (1000 * 60 * 60 * 24)));
      const daysRhs = parseInt(Math.floor((new Date(b.date) - new Date()) / (1000 * 60 * 60 * 24)));


      if (daysLhs === 0 && daysRhs === 0){ return parseFloat(a.weight) - parseFloat(b.weight); }
      else if(daysLhs === 0 ){ console.log(`Second: ${parseFloat(a.weight) * 100}`); weightLhs = parseFloat(a.weight) * 100;}
      else if (daysRhs === 0){ weightRhs = parseFloat(b.weight) * 100; }
      else {
        weightLhs = parseFloat(a.weight) / daysLhs;
        weightRhs = parseFloat(b.weight) / daysRhs;
      }
      return weightLhs - weightRhs;
    }

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
            sortedItems.sort(balancedSort);
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
                <select defaultValue="smart"
                    onChange={(e)=> handleSort(e.target.value)}
                    >
                    <option value="" selected hidden>Sort By</option>
                    <option value="date">Date</option>
                    <option value="weight">Weight</option>
                    <option value="smart">Smart</option>
                </select>
                
                <select
                    defaultValue="all"
                >
                    <option value="" selected hidden>Show More</option>
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