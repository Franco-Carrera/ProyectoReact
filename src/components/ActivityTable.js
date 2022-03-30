import React from "react";
import ActivityRow from "./ActivityRow";
import { useHistory } from "react-router-dom";
import "./ActivityTable.css";

const ActivityTable = ({ data }) => {
  const history = useHistory();
  const showStadistics = () => {
    history.push("/stadistics");
  };
  return (
    <>
      <h3>Tabla de Datos de los últimos 3 meses</h3>
      <div className="contain">
        <button onClick={showStadistics}>Ver estadísticas mensuales</button>
      </div>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Distancia</th>
            <th>Tiempo y ganancia de Elevación</th>
            {/* <th>Acciones</th> */}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <ActivityRow key={el.id} el={el} />)
          ) : (
            <div>
              <td colSpan="3">Sin datos</td>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ActivityTable;
