import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([
    { todo: "Walk the dog", date: "99/99/9999" },
    { todo: "Take out the trash", date: "99/99/9999" },
    { todo: "Go to soccer game", date: "99/99/9999" },
  ]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "" || date === "") {
      alert("Please fill in both values");
      return;
    }
    setList((list) => [...list, { todo: todo, date: date }]);
    setDate("");
    setTodo("");
  };

  const deleteTodo = (todo) => {
    setList([...list].filter((element) => element.todo !== todo));
  };

  const listFormat = list.map((e) => {
    return (
      <li key={e.todo}>
        <span className="todo">{e.todo}</span>
        <span className="date">due date: {e.date}</span>
        <i
          onClick={() => deleteTodo(e.todo)}
          className={"trash alternate icon"}
        ></i>
      </li>
    );
  });

  return (
    <div className="container">
      <div className="title">ToDo List</div>
      <form onSubmit={onSubmit}>
        <div className="creatorContainer">
          <div className="input">
            <span>Add ToDo:</span>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="form-control"
            />
            <div />
            <span>Date Goal:</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="submit">Submit</button>
        </div>
      </form>
      <ul className="list">{listFormat}</ul>
    </div>
  );
};

export default App;
