import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from  './components/Textform' ;
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
   setAlert(null);
    },2000)
  }

  

  const toggleMode = ()=>{
if (mode ==='light') {
  setMode('dark');
  document.body.style.background='rgb(13 12 66)';
  showAlert("Dark mode has been enabled.","success");
/*rgb(13 12 66)*/
}
else
{
  setMode('light');
  document.body.style.background='white';
  showAlert("Light mode has been enabled.","success");
}
  }
 
  return (
    <>

 <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert}/>
  <div className="container my-3">
  

          
     
          <Textform showAlert={showAlert} heading="Enter the text to Analye" mode={mode==='light'?'dark':'light'}/>
         
 </div>  

  </>
  );
}

export default App;
