import React, { useState } from "react";
import randomColor from "randomcolor";

function CreateTodo({ todo, setTodo }) {
  const [text, setText] = useState("");
  const getColor = () => {
    return randomColor({
      luminosity: "random",
      hue: "random",
    });
  };

  const addTask = () => {
    const newColor = getColor();
    if (text.length !== 0) {
      setTodo([
        {
          id: todo.length !== 0 ? todo[0].id + 1 : 0,
          text: text,
          color:
            todo.filter((taskEl) => taskEl.color === newColor).length === 0
              ? newColor
              : getColor(),
          done: false,
        },
        ...todo,
      ]);
    } else {
      alert("Введите заголовок задачи");
    }
    setText("");
  };
  return (
    <div className="create-todo">
      <div className="text-field">
        <label className="text-field__label">Добавить задачу</label>
        <div className="text-field__icon">
          <input
            autoComplete="off"
            className="text-field__input"
            type="search"
            name="search"
            id="search"
            placeholder="Введите текст"
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <span className="text-field__aicon" onClick={addTask}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" />

              <g id="SVGRepo_tracerCarrier" />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle cx="12" cy="12" r="10" stroke="#1C274C" />{" "}
                <path
                  d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                  stroke="#1C274C"
                />{" "}
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
export default CreateTodo;
