import React from "react";
import CurrentRow from "./CurrentRow";

const CurrentTable = ({ data }) => {
  return (
    <section>
      <h3>Tabla de Datos del mes actual</h3>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Nombre</th>
            {/* <th>Fecha</th> */}
            <th>Distancia</th>
            <th>Tiempo y ganancia de Elevación</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CurrentRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default CurrentTable;
