import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { noAction, readAllAction } from "../actions/crudActions";

import { getActivityMonth } from "../utils/Promises";
import CurrentTable from "./CurrentTable";
import Loader from "./Loader";
import Message from "./Message";

const CurrentMonth = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [current, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getActivityMonth().then((res) => {
      if (!res.err) {
        dispatch(readAllAction(res));
        setError(null);
        setCurrentUser(true);
      } else {
        dispatch(noAction());
        setError(res);
      }
      setLoading(false);
    });
  }, [dispatch]);

  ////////
  //Nace nueva promesa readOneData. Según lógica. Sino props o states
  ////////

  return (
    <article style={{ textAlign: "center" }}>
      <h2>Actividades recientes</h2>
      <section className="grid-1-2">
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status} ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && current ? <CurrentTable data={db} /> : null}
      </section>
    </article>
  );
};

export default CurrentMonth;
