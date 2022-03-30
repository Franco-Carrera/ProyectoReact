import {
  CREATE_DATA,
  DELETE_DATA,
  FIND_DATE,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const initialState = {
  db: null,
};

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      // console.log(action.payload.length);
      // console.log(action.payload[0].date);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      // console.log(action.payload);
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

      return {
        ...state,
        db: newData,
      };
    }

    case FIND_DATE: {
      //checking
      let getDate = state.db.map((el) =>
        el.date === action.payload ? action.payload.date : el
      );

      return {
        ...state,
        db: getDate,
      };
    }

    case DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);

      return {
        ...state,
        db: newData,
      };
    }

    case NO_DATA:
      return initialState;
    default:
      return state;
  }
}
