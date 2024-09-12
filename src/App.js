// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      message : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(23 42 70)"
      showAlert("Darkmode Enabled!", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Darkmode Disabled!", "success")
    }
  };

  // const light =()=>{
  //   setMode("light");
  //     document.body.style.backgroundColor = "white"
  //     showAlert("Light theme enabled!", "success")
  // }
  // const green =()=>{
  //   setMode("dark");
  //     document.body.style.backgroundColor = "#0f2414"
  //     showAlert("Green theme enabled!", "success")
  //     // document.title = "TextUtils - Green Theme"

  // }
  // const blue =()=>{
  //   setMode("dark");
  //     document.body.style.backgroundColor = "rgb(23 42 70)"
  //     showAlert("Blue theme enabled!", "success")
  //     // document.title = "TextUtils - Blue Theme"

  // }
  // const red =()=>{
  //   setMode("dark");
  //     document.body.style.backgroundColor = "#201212"
  //     showAlert("Red theme enabled!", "success")
  //     // document.title = "TextUtils - Red Theme"
  // }
  


  
  return (
    <>
      <BrowserRouter>
      <Navbar
        title="TextUtils"
        abouttext="About Us"
        mode={mode}
        togglemode={togglemode}
        // green = {green}
        // blue = {blue}
        // red = {red}
        // light = {light}
      />
      <Alert alert = {alert} />
      <Routes>
          {/* <Route path="/about" element= {<About  mode = {mode} />}/> */}
          <Route path="/" element= {<TextForm heading="Enter text to analyze" mode = {mode} showAlert = {showAlert} /> }/>
        </Routes>
      </BrowserRouter>
      {/* <About /> */}
    </>
  );
}

export default App;
