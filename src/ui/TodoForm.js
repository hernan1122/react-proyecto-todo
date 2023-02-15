import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/TodoForm.css'

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    navigate('/');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{ props.label }</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ej: 'Comprar el pan'"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          { props.submitText }
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };