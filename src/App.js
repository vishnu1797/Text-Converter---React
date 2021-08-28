import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert'
// import About from './components/About'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

  // Adding dark mode in app.js
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert('Dark Mode is enabled', 'success');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  // Adding auto-dismissing alerts
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
    {/* <Router> */}
    <Navbar title = "Welcome" About="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
        <div className="container my-3">
    {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <Textform showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
      {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

