import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App(props) {
  const [list, setList] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [filterColumn, setFilterColumn] = useState('Name');
  const [action, setAction] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/table/").then((response) => {
      setList(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
  }, []);


  // #This function for pagination previous page
  function submitPrevious() {
    axios.get(previous).then((response) => {
      setList(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
  }
  // #This function for pagination next page
  function submitNext() {
    axios.get(next).then((response) => {
      setList(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
  }
  
  // This function make filter by colums that we choose
  function submitSearch(value) {
    
    if (filterColumn === 'Name') {
      const url = `http://127.0.0.1:8000/table/?search=${value.toLowerCase()}`
      axios.get(url)
      .then((response) => {
        setList(response.data.results)
        setNext(response.data.next);
        setPrevious(response.data.previous);
      })
    } else {
      let url = `http://127.0.0.1:8000/table/?${filterColumn.toLowerCase()}=${value}&action=${action}`
      if (value === '') {
        url = 'http://127.0.0.1:8000/table/'
      }
      axios.get(url)
      .then((response) => {
        setList(response.data.results)
        setNext(response.data.next);
        setPrevious(response.data.previous);
      })
    // } else if (filterColumn === 'Distance') {
    //   let url = `http://127.0.0.1:8000/api/?distance=${value}&action=${action}`
    //   if (value === '') {
    //     url = 'http://127.0.0.1:8000/api/'
    //   }
    //   axios.get(url)
    //   .then((response) => {
    //     setList(response.data.results)
    //     setNext(response.data.next);
    //     setPrevious(response.data.previous);
    //   })
    }

  }


  return (
    <div className="App">
      <Dropdown filterColumn={filterColumn} action={action} setFilterColumn={setFilterColumn} setAction={setAction}/>
      <Input submitSearch={submitSearch}/>
      <Table list={list}/>
      <Pagination previous={previous} submitPrevious={submitPrevious} submitNext={submitNext} next={next}/>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import TableList from './components/table-list';

// const url = "http://127.0.0.1:8000/table/"

// function App() {

//   const [table, setTable] = useState([]);

//   useEffect(() => {
//     fetchData()
//   }, []);
    
    
//   const fetchData = () => {
//     axios
//       .get(url)
//       .then(res=> {
//         console.log(res);
//         console.log(res.data);
//         setTable(res.data);
//       })
//       .catch((err)=> console.log(err))
//   }

//   return
//     <div className='App'>
//       <hr />
//       <TableList data={table} />
//     </div>

//   // return (
//   //   <div className="App">
//   //     <div> hello world </div>
//   //   </div>
//   //   );
// }

// export default App;
