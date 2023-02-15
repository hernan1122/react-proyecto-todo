import React from "react";
import '../css/TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return(
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {/* si no hay nada en loading y ademas no hay nada en totalTodos, entonces voy a renderizar lo que venga en onEmptyTodos() */}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {/* si es true que totalTodos no es 0, null o undefined y ademas la longitud de searchedTodos es 0, entonces voy a renderizar lo que venga en onEmptySearchResults() */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
