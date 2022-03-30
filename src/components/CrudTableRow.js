import React from "react";
import { Link } from "react-router-dom";
import "./CrudTableRow.css";

const CrudTableRow = ({ el, setDataToEdit, deleteData, readOneData }) => {
  let { name, date, distance, time_and_elevation_gain, id } = el;

  return (
    <tr>
      <td>{name}</td>

      <td onClick={() => readOneData(el.date)}>
        <Link to={`/itemMonth/${el.id}`}>{date}</Link>
      </td>

      <td>{distance}</td>
      <td>{time_and_elevation_gain}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>

        {/* <button onClick={() => readOneData(el.date)}>View date</button> */}
        {/* <button onClick={() => findDate(el)}>Ver fecha</button> */}
      </td>
    </tr>
  );
};

export default CrudTableRow;
