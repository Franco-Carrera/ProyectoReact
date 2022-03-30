import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readAllAction, noAction } from "../actions/crudActions";
import { getAllData /*getAllUsers*/ } from "../utils/Promises";
import ActivityTable from "./ActivityTable.js";
import Loader from "./Loader";
import Message from "./Message";

const ActivityApi = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState(null); //new

  useEffect(() => {
    setLoading(true);
    getAllData().then((res) => {
      if (!res.err) {
        dispatch(readAllAction(res));
        setError(null);
        setActivities(true);
      } else {
        dispatch(noAction());
        setError(res);
      }
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Actividades</h2>
      <article className="grid-1-2">
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && activities ? <ActivityTable data={db} /> : null}
      </article>
    </section>
  );
};

export default ActivityApi;
