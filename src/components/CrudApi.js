import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createAction,
  deleteAction,
  noAction,
  readAllAction,
  readDate,
  updateAction,
} from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let urlUsers = "http://localhost:5000/users";

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(urlUsers)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch(readAllAction(res));
          setError(null);
        } else {
          //setDb(null);
          dispatch(noAction());
          setError(res);
        }
        setLoading(false);
      });
  }, [urlUsers, dispatch]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(urlUsers, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${urlUsers}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData)
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const readOneData = (data) => {
    let endpoint = `${urlUsers}/${data}`;
    console.log(endpoint);
    //como sacar undefined pensar //CrudTableForm //date

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.get(endpoint, options).then((res) => {
      // console.log(res); // (error):failed to ejecute fetch on Window
      console.log(options);
      if (!res.err) {
        dispatch(readDate(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${urlUsers}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Estadísticas de actividades</h1>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          // readOneData={readOneData}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            readOneData={readOneData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
