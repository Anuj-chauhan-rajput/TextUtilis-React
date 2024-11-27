
import React, { useState } from "react";
import "./App.css";
import About from "./Component/About";
import Nabvar from "./Component/Nabvar";
import TestForm from "./Component/TestForm";
import Alert from "./Component/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
 const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    
  }

  const toggleMode=(cls)=>{
    console.log(cls);
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","Success");
      document.title="TextUtils-Dark Mode"

      // setInterval(() => {
      //   document.title='TestUtils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title=' Install TestUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","Success");
      document.title="TextUtils-Light Mode"


    }
  }
  
  
    return (

     

    
      <Router>
        <Nabvar title="TestUtils" About="About TestUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TestForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces " mode={mode} />} />
          </Routes>
        </div>
      </Router>
    

  );
}

export default App;
