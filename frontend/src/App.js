import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Input from "./components/Input";
import DropdownList from "./components/DropdownList";

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

  function submitPrevious() {
    axios.get(previous).then((response) => {
      setList(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
  }

  function submitNext() {
    axios.get(next).then((response) => {
      setList(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
  }
  
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
    }
  }


  return (
    <div className="App">
      <DropdownList filterColumn={filterColumn} action={action} setFilterColumn={setFilterColumn} setAction={setAction}/>
      <Input submitSearch={submitSearch}/>
      <Table list={list}/>
      <Pagination previous={previous} submitPrevious={submitPrevious} submitNext={submitNext} next={next}/>
    </div>
  );
}

export default App;