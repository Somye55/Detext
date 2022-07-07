import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
 

  const toggle =()=> {
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#292e33'
     ShowAlert('You enabled dark mode','success')
    // document.title='Darkmode is enabled'
    // setInterval(() => {
    //   document.title='You have (79) new messages!'
   
    // }, 2000);
    // setInterval(() => {
    //   document.title='Install app!'
   
    // }, 1500);
  }

  else{
    setmode('light');
    document.body.style.backgroundColor='white'
    ShowAlert('You disabled dark mode','success')
    // document.title='Dark mode is disabled'

  


  }}
  const ShowAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type});

    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  return (
    <>   
    <Router>
    
  
  <Navbar title="Navbar1" home="Home" mode={mode} toggleMode = {toggle}/> 
  <Alert alert={alert}/>
   {/* <TextForm mode={mode} ShowAlert={ShowAlert} /> 
  <About mode={mode}/>  */}
 <Routes> 
<Route exact path='/about' element={< About  mode={mode}/>}></Route>
<Route exact path='/textform' element={<TextForm mode={mode} ShowAlert={ShowAlert} /> }></Route>   
<Route exact path='/home' element={<Home  mode={mode}/>}></Route>   
<Route exact path='/' element={<Home  mode={mode}/>}></Route>   
</Routes> 
</Router>
  </>
   
  );
  
}

export default App;
