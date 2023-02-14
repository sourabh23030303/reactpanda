
import './App.css';
import Navbar from "./COMPONENT/navbar";
import Textform from "./COMPONENT/textform";
import About from "./COMPONENT/about";
import { useState } from 'react';
import Alert from "./COMPONENT/Alert";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  
 } 
  from 'react-router-dom';

function App2() {

  
  const[mode,setmode]=useState('secondary');
  const toggle = ()=>{
    if(mode==='secondary'){
      setmode('dark')
      document.body.style.backgroundColor ='black'
      document.body.style.color ='white'
      showalert(": darkmode enabled","success")
    }
    else{
      setmode('secondary')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
      showalert(": darkmode disabled","success")
    }
  }
  const [alert, setalert] = useState(null)

const showalert=(message,type)=>{
  setalert({//phele null tha alert ab object bn gya hai
msg:message,
type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 2000);
}


  return (
    <>
<Router>

    <Navbar mode={mode} toggle={toggle}/>
      <Alert Alert= {alert} />
    <div className="container my-3">
    
<Switch>

<Route exact path='/about'>
<About/>
</Route>
<Route path="/textform">
<Textform  showalert ={showalert} heading = "Analyse your text blow"/> 
</Route>


</Switch>
    </div>
</Router>
      
    </>
   
  
  );
}

export default App2;






