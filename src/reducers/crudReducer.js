import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const initialState = {
  db: [
    {
      id: 1,
      name: "Seiya",
      date: "03/03/2002",
      distance: 100.5,
      time_and_elevation_gain: "764 hours",
    },
    {
      id: 2,
      name: "Shiryu",
      date: "18/07/2013",
      distance: 100.5,
      time_and_elevation_gain: "565 hours",
    },
    {
      id: 3,
      name: "Hyoga",
      date: "10/01/1898",
      distance: 100.5,
      time_and_elevation_gain: "264 hours",
    },
    {
      id: 4,
      name: "Shun",
      date: "17/08/2009",
      distance: 100.5,
      time_and_elevation_gain: "165 hours",
    },
    {
      id: 5,
      name: "Ikki",
      date: "02/01/1984",
      distance: 100.5,
      time_and_elevation_gain: "31 hours",
    },
    {
      id: 6,
      name: "Mú",
      date: "11/04/2002",
      distance: 100.5,
      time_and_elevation_gain: "15 hours",
    },
    {
      id: 7,
      name: "Saga",
      date: "10/01/2004",
      distance: 100.5,
      time_and_elevation_gain: "16 hours",
    },
    {
      name: "Kanón",
      date: "07/05/2014",
      distance: 100.5,
      time_and_elevation_gain: "29 hours",
      id: 1626132723014,
    },
    {
      name: "Shura",
      date: "12/12/2021",
      distance: 100.5,
      time_and_elevation_gain: "6 hours",
      id: 1626133398548,
    },
    {
      name: "Asmita",
      date: "22/12/2021",
      distance: 1120.5,
      time_and_elevation_gain: "12 hours",
      id: 1639705920657,
    },
  ],
};

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      //console.log(action.payload);

      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      //console.log(action.payload);
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
