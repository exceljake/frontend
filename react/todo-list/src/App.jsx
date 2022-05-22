import {useState} from "react";
import './App.css';

const Form = (props) => {

  const [item, setItem] = useState("");

  const itemChangedHandler = (event) => {
    setItem(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault(); 
    props.add(item);
  }

  return(
    <form onSubmit={submitHandler}>
    <input type="text" onChange={itemChangedHandler}/>
    <button>Add</button>
  </form>
  );

}

function App() {
  return (
    <div className="App">
      <h1>My To Do List</h1>
    <Form/>
    </div>
  );
}

export default App;
