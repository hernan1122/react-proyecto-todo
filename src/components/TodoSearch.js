import React, { useContext } from "react";
import '../css/TodoSearch.css';
import { TodoContext } from "../TodoContext";
import '../css/TodoSearch.css'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

    return(
      <input
        className="TodoSearch"
        placeholder="Busca tu TODO"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    );
}

export { TodoSearch };
