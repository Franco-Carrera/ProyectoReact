import {
  READ_ALL_DATA,
  CREATE_DATA,
  UPDATE_DATA,
  FIND_DATE,
  DELETE_DATA,
  NO_DATA,
} from "../types";

export const createAction = (data) => ({ type: CREATE_DATA, payload: data });

export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data });

export const updateAction = (data) => ({ type: UPDATE_DATA, payload: data });

export const readDate = (data) => ({ type: FIND_DATE, payload: data }); //en proceso

export const deleteAction = (id) => ({ type: DELETE_DATA, payload: id });

export const noAction = () => ({ type: NO_DATA });
