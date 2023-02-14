
import './App.css';
import Header from "./mycomponent/headerm.js";
import Footer from "./mycomponent/footer";
import Todos from "./mycomponent/todos";
function App() {
let todos = [
  {
    sno:1,
    title:"go to the market",
    desc:"yoiu nee dto go "
  },
  {
    sno:2,
    title:"go to the ghat",
    desc:"yoiu nee dto go "
  },
  {
    sno:3,
    title:"go to the mall",
    desc:"yoiu nee dto go "
  }
]


  return (
    <>
    <Header title = "header" searchbar = {true}/>
    <Todos todos ={todos}/>
    <Footer/>
 
    </>
   
  
  );
}

export default App;
