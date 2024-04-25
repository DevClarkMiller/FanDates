import { useState } from "react";
import React from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'




function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('courses')) || []);

  const [newCourse, setNewCourse] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newWeight, setNewWeight] = useState('');
  const [newName, setNewName] = useState('');
  const [newItem, setNewItem] = useState('');
  const [getSort, setGetSort] = useState('');
  const [getCourseView, setGetCourseView] = useState('');

  const navigate = useNavigate(); //Used for redirecting

  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('courses', JSON.stringify(newItems));
  }

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name: item.name, 
      date: item.date, course: item.course, weight: item.weight};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

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

    navigate('/');

    addItem(tempItem);
    setNewCourse('');
    setNewName('');
    setNewDate('');
    setNewWeight('');
  }

  const handleSort = (sort) =>{
    switch (sort){
      case "date":
        break;

      case "weight":
        break;

      case "smart":
        break;
    }
  }

  const handleSync = () =>{
    //alert("Syncing...");
  }

  return (
    <div className='App'>
      <Header title={"Fan Dates"} />
      <Routes>
        <Route path="/" element={
          <Content 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleSync={handleSync}
            getCourseView={getCourseView}
            setGetCourseView={setGetCourseView}
            getSort={getSort}
            setGetSort={setGetSort}
            handleSort={handleSort}
          />
        }/>
        

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
