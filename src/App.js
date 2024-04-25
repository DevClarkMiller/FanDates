import { useState } from "react";
import React from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'




function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('courses')) || []);

  const [newCourse, setNewCourse] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newWeight, setNewWeight] = useState('')
  const [newName, setNewName] = useState('')
  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('courses', JSON.stringify(newItems));
  }

  //setAndSaveItems([])

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name: item.name, 
      date: item.date, course: item.course, weight: item.weight};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  //addItem({date: new Date().toDateString(), course: "C++", name: "quiz 1", weight: "20%"})

  const handleCheck = (id) =>{
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id); 
    setAndSaveItems(listItems);
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

    addItem(tempItem);

    setNewCourse('');
    setNewName('');
    setNewDate('');
    setNewWeight('');
  }

  return (
    <div className='App'>
      <Header title={"Fan Dates"} />
      <Routes>
        <Route path="/" element={<AddItem
          newItem={newItem}
          handleSubmit={handleSubmit}
          setNewItem={setNewItem}
          setNewName={setNewName}
          setNewCourse={setNewCourse}
          setNewDate={setNewDate}
          setNewWeight={setNewWeight}
          />} />
   
      </Routes>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      
    </div>
  )
}

export default App;
