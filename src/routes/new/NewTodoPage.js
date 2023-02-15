import React from "react";
import { TodoForm } from '../../ui/TodoForm.js';
import { useTodos } from "../useTodos.js";

function NewTodoPage() {
  const { stateUpdaters } = useTodos()
  const { addTodo } = stateUpdaters

  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export { NewTodoPage }
