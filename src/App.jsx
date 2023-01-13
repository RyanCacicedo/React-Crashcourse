import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"></Todo>
        <Todo title="Finish Interview Section"></Todo>
        <Todo title="Land a $100k Job"></Todo>
      </div>
      <Modal title="Are you sure you want to delete?"></Modal>
    </div>
  );
}

export default App;
