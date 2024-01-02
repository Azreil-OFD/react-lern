function FunctionsTodo({ todo, setTodo }) {
  return (
    <div className="function-todo">
      <label className="text-field__label">Функции</label>
      <button
        type="button"
        className="block"
        onClick={() => {
          setTodo([]);
        }}
      >
        Удалить все задачи
      </button>
      <button
        type="button"
        className="block"
        onClick={() => {
          const newTodo = todo;
          for (let index = 0; index < newTodo.length; index++) {
            newTodo[index].done = true;
          }
          setTodo(newTodo);
        }}
      >
        Пометить все как "выполнено"
      </button>
      <button
        type="button"
        className="block"
        onClick={() => {
          const newTodo = todo;
          for (let index = 0; index < newTodo.length; index++) {
            newTodo[index].done = false;
          }
          setTodo(newTodo);
        }}
      >
        Пометить все как "не выполнено"
      </button>
    </div>
  );
}

export default FunctionsTodo;
