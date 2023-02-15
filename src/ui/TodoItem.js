import React from "react";
import '../css/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={
          `Icon Icon-check ${props.completed && 'Icon-check--active'}`
        }
        onClick={props.onComplete}
      >
        <i className="fa-regular fa-square-check"></i>
      </span>

      <p className={
        `TodoItem-p ${props.completed && 'TodoItem-p--complete'}`
      }>
        {props.text}
      </p>

      <span
        className="Icon Icon-edit"
        onClick={props.onEdit}
      >
        <i class="fa-solid fa-pencil"></i>
      </span>

      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}

export { TodoItem };
