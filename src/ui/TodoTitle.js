import React from "react";
import '../css/TodoTitle.css';

function TodoTitle() {
  return (
    <header className="TodoTitle">
      <span className="TodoTitle-icon">
        <i class="fa-solid fa-ghost"></i>
      </span>
      <h1 className="TodoTitle-title">ToDo List </h1>
    </header>
  );
}

export { TodoTitle };
