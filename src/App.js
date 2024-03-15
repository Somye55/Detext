import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [textColor, setTextColor] = useState('black');


  const toggle = () => {
    if (mode === 'light') {
      setmode('dark');
      setTextColor('white');
      document.body.style.backgroundColor = '#212529';
      // document.title='Darkmode is enabled'
      // setInterval(() => {
      //   document.title='You have (79) new messages!'

      // }, 2000);
      // setInterval(() => {
      //   document.title='Install app!'

      // }, 1500);
    }

    else {
      setmode('light');
      setTextColor('black');
      document.body.style.backgroundColor = 'white';
      // document.title='Dark mode is disabled'




    }
  }


  return (
    <>
      <Router>
        <Navbar home="Home" mode={mode} toggleMode={toggle} text={textColor}/>
        {/* <Alert alert={alert} /> */}
        {/* <TextForm mode={mode} ShowAlert={ShowAlert} /> 
  <About mode={mode}/>  */}
        <Routes>
          <Route exact path='/about' element={< About mode={mode} />} text={textColor}></Route>
          <Route exact path='/textform' element={<TextForm mode={mode}  text={textColor}/>}></Route>
          <Route exact path='/home' element={<Home mode={mode} text={textColor}/>}></Route>
          <Route path="/" element={<Navigate to="/home" />} /></Routes>
      </Router>
    </>

  );

}

export default App;
