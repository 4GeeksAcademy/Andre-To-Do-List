import React, { useState } from "react";

const Home = () => {
  const [entradaTarea, setEntradaTarea] = useState('');
  const [nuevasTareas, setNuevasTareas] = useState([]);
  const [indiceHover, setIndiceHover] = useState(null);

  const manejarEntradaTarea = (e) => {
    setEntradaTarea(e.target.value);
  };

  const manejarTeclaEnter = (e) => {
    if (e.key === "Enter") {
      setNuevasTareas(nuevasTareas.concat([entradaTarea]));
      setEntradaTarea("");
    }
  };

  const eliminarTarea = (id) => {
    let eliminadas = nuevasTareas.filter((tarea, index) => {
      return index !== id;
    });
    setNuevasTareas(eliminadas);
  };

  return (
    <div className="container containerEstilo">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="¿Qué se debe hacer?"
        onChange={manejarEntradaTarea}
        value={entradaTarea}
        onKeyDown={manejarTeclaEnter}
        className="form-control entradaFormulario"
      />
      <ul className="todo-list listaDeTareas">
        {nuevasTareas.map((tarea, i) => (
          <li
            key={i}
            onMouseEnter={() => setIndiceHover(i)}
            onMouseLeave={() => setIndiceHover(null)}
            className="todo-item elementoDeTarea"
          >
            <span className="textoTarea">{tarea}</span>
            {indiceHover === i && (
              <button onClick={() => eliminarTarea(i)} className="btnEliminar">Eliminar</button>
            )}
          </li>
        ))}
      </ul>
      <div> {nuevasTareas.length} Items Pendientes</div>
    </div>
  );
};

export default Home;


