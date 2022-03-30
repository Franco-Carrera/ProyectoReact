import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData, readOneData }) => {
  return (
    <section>
      <h3>Tabla de Datos de los últimos 3 meses</h3>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Distancia</th>
            <th>Tiempo y ganancia de Elevación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                readOneData={readOneData}
              />
            ))
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

export default CrudTable;
