import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from '../components/TodoHeader';
import { TodoTitle } from '../components/TodoTitle.js';
import { TodoCounter } from '../components/TodoCounter.js';
import { TodoSearch } from "../components/TodoSearch.js";
import { TodoList } from "../components/TodoList.js";
import { TodoItem } from "../components/TodoItem.js";
import { TodosError } from '../components/TodosError.js';
import { TodosLoading } from '../components/TodosLoading.js';
import { EmptyTodos } from '../components/EmptyTodos.js';
import { TodoForm } from '../components/TodoForm.js';
import { CreateTodoButton } from "../components/CreateTodoButton.js";
import { Modal } from '../Modal/index.js';

function App() {
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
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
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

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        //render props
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
        //render functions
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
