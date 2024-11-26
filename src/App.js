
import React, { useState } from "react";
import "./App.css";
// import About from "./Component/About";
import Nabvar from "./Component/Nabvar";
import TestForm from "./Component/TestForm";
import Alert from "./Component/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

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

  const toggleMode=()=>{
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

      <>

        <Nabvar title="TestUtils" About="About TestUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

      <TestForm showAlert={showAlert} heading="Enter the test to analyze" mode={mode} />

        
        
        </>

    
      // <Router>
      //   <Nabvar title="TestUtils" About="About TestUtils" mode={mode} toggleMode={toggleMode} />
      //   <Alert alert={alert} />
      //   <div className="container my-3">
      //     <Routes>
      //       <Route path="/about" element={<About />} />
      //       <Route path="/" element={<TestForm showAlert={showAlert} heading="Enter the test to analyze" mode={mode} />} />
      //     </Routes>
      //   </div>
      // </Router>
    

  );
}

export default App;
