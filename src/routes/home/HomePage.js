import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoTitle } from '../../ui/TodoTitle.js';
import { TodoCounter } from '../../ui/TodoCounter.js';
import { TodoSearch } from "../../ui/TodoSearch.js";
import { TodoList } from "../../ui/TodoList.js";
import { TodoItem } from "../../ui/TodoItem.js";
import { TodosError } from '../../ui/TodosError.js';
import { TodosLoading } from '../../ui/TodosLoading.js';
import { EmptyTodos } from '../../ui/EmptyTodos.js';
import { CreateTodoButton } from "../../ui/CreateTodoButton.js";
import { ChangeAlert } from "../../HOC/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    // openModal,
    searchValue,
  } = states;
  
  const {
    // setOpenModal,
    // addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <>
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
        /* render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            //onEdit={() => completeTodo(todo.text)}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate(
                '/edit/' + todo.id,
                {
                  state: { todo }
                },
              )
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </>
  );
}

export { HomePage };
