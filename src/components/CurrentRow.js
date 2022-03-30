import React from "react";

const CurrentRow = ({ el }) => {
  let { activitie, name, distance, time_and_elevation_gain } = el;
  return (
    <>
      <tr>
        <td>{activitie}</td>
        <td>{name}</td>
        {/* <td>{date}</td> */}
        <td>{distance}</td>
        <td>{time_and_elevation_gain}</td>

        {/* <button onClick={() => goHome()}>Go home</button> */}
      </tr>
    </>
  );
};

export default CurrentRow;
