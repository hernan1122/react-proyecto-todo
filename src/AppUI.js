import React from 'react';
import { TodoContext } from './TodoContext/index.js';
import { TodoHeader } from './components/TodoHeader.js';
import { TodoTitle } from './components/TodoTitle.js';
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { TodosError } from './components/TodosError.js';
import { TodosLoading } from './components/TodosLoading.js';
import { EmptyTodos } from './components/EmptyTodos.js';
import { TodoForm } from './components/TodoForm.js';
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { Modal } from './Modal/index.js';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } =  React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoTitle />
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
