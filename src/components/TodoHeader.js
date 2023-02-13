import React from "react";
import '../css/TodoHeader.css';

function TodoHeader({ children, loading }) {
  return (
    <header className="TodoHeader-container">
      {
        React.Children
        .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
