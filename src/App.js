//import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Subject from "./components/Subject";
import NavBar from "./components/NavBar";
 function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Subject" element={<Subject />} />
      </Routes>
    </div>
  );
}

export default App;
