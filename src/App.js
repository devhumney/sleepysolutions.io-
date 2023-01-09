import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from  "./Header.js";
import Quote from './Quote';
import React, {useState} from "react"
import { useEffect } from 'react';

function useWindowSize(){
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  
  })
  return size;
}

function App() {
  const [height, width] = useWindowSize();
  return (

    <Router>  
    <div className="App">
      <Routes>

        <Route path="/" element={<div><Header/></div>}>
        </Route>
        <Route path="/quote" element={<div><Quote/></div>}>
        </Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
