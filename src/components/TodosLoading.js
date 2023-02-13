import React from "react";
import '../css/TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-circle"></span>
      <span className="LoadingTodo-circle"></span>
      <span className="LoadingTodo-circle"></span>
    </div>
  );
}

export { TodosLoading };
