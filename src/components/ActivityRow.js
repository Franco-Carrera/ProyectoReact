import React from "react";
// import React, { useEffect, useState } from "react";

const ActivityRow = ({ el }) => {
  // const [month, setMonth] = useState(true);
  // useEffect(() => {
  //   if (month) setMonth(true);
  // }, [month]);

  let { activitie, date, name, distance, time_and_elevation_gain } = el;

  return (
    <>
      <tr>
        <td>{activitie}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{distance}</td>
        <td>{time_and_elevation_gain}</td>
      </tr>

      {/* <button onClick={() => findDate(el)}></button> */}
    </>
  );
};

export default ActivityRow;
