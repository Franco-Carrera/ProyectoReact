import React, { useEffect, useState } from "react";

const ActivityMonth = ({ el, data }) => {
  //let { date, } = el.date;

  const [month, setMonth] = useState(true);
  useEffect(() => {
    if (month) setMonth(true);
  }, [month]);

  return (
    <>
      {month && (
        <article>
          <h2 style={{ textAlign: "center" }}>Activity of Month</h2>
          <aside>
            <p>Date Generic</p>
          </aside>
        </article>
      )}
    </>
  );
};

export default ActivityMonth;
