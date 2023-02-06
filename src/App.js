import "./App.css";
import AddTodo from "./components/AddTodos";
import ListTodo from "./components/ListTodos";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
