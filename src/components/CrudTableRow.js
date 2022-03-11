import React from "react";
import { useHistory } from "react-router";
import "./CrudTableRow.css";

const CrudTableRow = ({ el, data, setDataToEdit, deleteData }) => {
  //console.log(data);
  let { name, date, distance, time_and_elevation_gain, id } = el;

  //const findDate = {
  // userDate: { ...el, date },
  //};

  const history = useHistory();
  const showActivityMonth = () => {
    history.push("/month");
  };

  return (
    <tr>
      <td>{name}</td>
      <td className="date" onClick={showActivityMonth}>
        {date}
      </td>
      <td>{distance}</td>
      <td>{time_and_elevation_gain}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
        {/* <button onClick={() => findDate(el)}></button> */}
      </td>
    </tr>
  );
};

export default CrudTableRow;
