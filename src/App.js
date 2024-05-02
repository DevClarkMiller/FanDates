import { useState, useEffect } from "react";
import React from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import EditItem from './EditItem'
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('courses')) || []);

  const [newCourse, setNewCourse] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newWeight, setNewWeight] = useState('');
  const [newName, setNewName] = useState('');
  const [newItem, setNewItem] = useState('');
  
  const [editName, setEditName] = useState('');
  const [editCourse, setEditCourse] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editWeight, setEditWeight] = useState('');

  const [sort, setSort] = useState('smart');

  //For checking if mouse is down or up
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(()=>{
    localStorage.setItem('courses', JSON.stringify(items));
  }, [items])


  useEffect(()=>{
    handleSort(sort);
  }, [sort])

  const navigate = useNavigate(); //Used for redirecting

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name: item.name, 
      date: item.date, course: item.course, weight: item.weight};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id); 
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents page from resfreshing
    if(!newName) return;

    const tempItem = {
      date: newDate, 
      course: newCourse, 
      name: newName, 
      weight: newWeight
    }

    navigate('/');

    addItem(tempItem);
    setNewCourse('');
    setNewName('');
    setNewDate('');
    setNewWeight('');
  }

  const handleEdit = (item) =>{
    const index = items.indexOf(item);
    const updatedItem = {id: item.id,  name: editName, 
      date: editDate, course: editCourse, weight: editWeight}

    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setEditName('');
    setEditDate('');
    setEditCourse('');
    setEditWeight('');
    navigate('/');
  }
  
  const handleSync = () =>{
    alert("Syncing...");
  }


  //For best decision on what to work on next :)
  const balancedSort = (a, b) =>{
    let weightLhs;
    let weightRhs;

    const daysLhs = parseInt(Math.floor((new Date(a.date) - new Date()) / (1000 * 60 * 60 * 24)));
    const daysRhs = parseInt(Math.floor((new Date(b.date) - new Date()) / (1000 * 60 * 60 * 24)));


    if (daysLhs === 0 && daysRhs === 0){ return parseFloat(a.weight) - parseFloat(b.weight); }
    else if(daysLhs === 0 ){ weightLhs = parseFloat(a.weight) * 100;}
    else if (daysRhs === 0){ weightRhs = parseFloat(b.weight) * 100; }
    else {
      weightLhs = parseFloat(a.weight) / daysLhs;
      weightRhs = parseFloat(b.weight) / daysRhs;
    }
    return weightLhs - weightRhs;
  }

  const handleSort = (sort) =>{
      let sortedItems = [...items]; //Creates shallow copy of the items array
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

  return (
    <div className='App'>
      <Header title={"Fan Dates"} />
      <Routes>
        <Route path="/" element={
          <Content 
            items={items}
            setItems={setItems}
            handleDelete={handleDelete}
            handleSync={handleSync}
            isMouseDown={isMouseDown}
            setIsMouseDown={setIsMouseDown}
            handleSort={handleSort}
            sort={sort}
            setSort={setSort}
          />
        }/>

        <Route path="edit/:id"
          element={<EditItem 
            items={items}
            editName={editName}
            setEditName={setEditName}
            editCourse={editCourse}
            setEditCourse={setEditCourse}
            editDate={editDate}
            setEditDate={setEditDate}
            editWeight={editWeight}
            setEditWeight={setEditWeight}
            handleEdit={handleEdit}
          />}
        />

        <Route path="/create" element={<AddItem
          newItem={newItem}
          handleSubmit={handleSubmit}
          setNewItem={setNewItem}
          setNewName={setNewName}
          setNewCourse={setNewCourse}
          setNewDate={setNewDate}
          setNewWeight={setNewWeight}
          />} />
      </Routes>
    </div>
  )
}

export default App;
