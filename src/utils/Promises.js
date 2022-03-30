import { helpHttp } from "../helpers/helpHttp";

export const getAllData = () => {
  let urlActs = "http://localhost:5000/activities";

  return new Promise((resolve, reject) => {
    console.log(urlActs);
    helpHttp()
      .get(urlActs)
      .then((res) => {
        if (!res.err) {
          resolve(res);
          console.log(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  });
};

export const getAllUsers = () => {
  let urlUsers = "http://localhost:5000/users";
  return new Promise((resolve, reject) => {
    console.log(urlUsers);
    helpHttp()
      .get(urlUsers)
      .then((res) => {
        if (!res.err) {
          resolve(res);
          console.log(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  });
};

export const getActivityMonth = () => {
  let urlActsMonth = "http://localhost:5000/activitiesMonth";

  return new Promise((resolve, reject) => {
    console.log(urlActsMonth);
    helpHttp()
      .get(urlActsMonth)
      .then((res) => {
        if (!res.err) {
          resolve(res);
          console.log(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  });
};
