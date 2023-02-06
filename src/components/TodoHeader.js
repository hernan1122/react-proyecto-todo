import React from "react";
import '../css/TodoHeader.css';

function TodoHeader() {
  return (
    <header className="TodoHeader">
      <span className="TodoHeader-icon"><i class="fa-solid fa-square-pen"></i></span>
      <h1 className="TodoHeader-title">ToDo List </h1>
    </header>
  );
}

export { TodoHeader };
