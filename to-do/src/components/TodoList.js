function TodoList({ todo, setTodo }) {
  const Content = () => {
    if (todo.length === 0)
      return (
        <p
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          Пока тут нету задач
        </p>
      );
    else
      return (
        <ul className="border">
          {todo.map((task) => (
            <li
              className="todoItem"
              key={task.id}
              style={{ borderColor: task.color }}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => {
                  const newTodo = todo;
                  for (let index = 0; index < newTodo.length; index++) {
                    if (newTodo[index].id === task.id) {
                      newTodo[index].done = newTodo[index].done ? false : true;
                    }
                  }
                  setTodo(newTodo);
                }}
              />
              <span className="text">{task.text}</span>
              <span
                className="deleteBtn"
                onClick={() => {
                  setTodo(todo.filter((taskEl) => taskEl.id !== task.id));
                }}
              >
                x
              </span>
            </li>
          ))}
        </ul>
      );
  };

  return (
    <div className="todo-list">
      <Content />
    </div>
  );
}

export default TodoList;
