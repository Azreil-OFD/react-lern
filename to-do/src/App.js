import CreateTodo from "./components/CreateTodo";
import FunctionsTodo from "./components/FunctionsTodo";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {
  const [Todo, SetTodo] = useLocalStorage("todo", []);
  return (
    <>
      <div className="header" id="myHeader">
        <h2>To-Do</h2>
      </div>

      <div className="App">
        <CreateTodo todo={Todo} setTodo={SetTodo} />
        <FunctionsTodo todo={Todo} setTodo={SetTodo} />
        <TodoList todo={Todo} setTodo={SetTodo} />
      </div>
    </>
  );
}

export default App;
