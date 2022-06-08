import logging from "../config/logging";
import db from "../config/db";

interface User {
  username: string;
  password: string | undefined;
}

function auth(result: any) : any {
  result.forEach((login: string, password: string) => {
    if (login == "userEnter") {
      logging.info("USER", 'Already exist');
      return -1;
    }
    else
      return 1;
  });
};

const createUserDb = async (username, password) => {
  return new Promise<User>((resolve, reject) => {
    let query = `INSERT INTO USER (login, password) VALUES (?,?)`;
    db.execute(query, [username, password], (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(result);
    })
  })
};

const getAllUser = async () => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM USER";
    db.execute(query, (err, result) => {
    if (err) {
      console.error(err);
      return reject(err);
    }
    return resolve(result);
    })
  })
};

export default { createUserDb, getAllUser};
