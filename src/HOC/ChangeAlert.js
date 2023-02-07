import React from "react";
import { useStorageListener } from "./useStorageListener";
import '../css/ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize)

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p className="ChangeAlert-container-p">Parece que cambiaste tus TODOs en otra pestaña o ventana </p>
          <p className="ChangeAlert-container-p">Es necesario actualizar para ver los cambios en la pestaña actual</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Actualizar
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert };
