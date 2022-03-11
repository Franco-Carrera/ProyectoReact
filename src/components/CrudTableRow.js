import React from "react";
//import ActivityMonth from "./ActivityMonth";
import "./CrudTableRow.css";

const CrudTableRow = ({ el, data, setDataToEdit, deleteData }) => {
  let { name, date, distance, time_and_elevation_gain, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{distance}</td>
      <td>{time_and_elevation_gain}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
