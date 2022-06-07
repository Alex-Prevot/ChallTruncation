import { NextFunction, Request, Response } from "express";
import logging from "../config/logging";
import { Connect, Query } from "../config/mysql";


interface User {
  login: string;
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

const createUser = async (req: Request, res: Response) => {
    logging.info("USER", 'Inserting User');

    let { login, password } = req.body;

    let query = `INSERT INTO USER (login, password) VALUES (?,?)`;

    Connect()
        .then((connection) => {
          connection.ex
            Query(connection, query)
                .then((result) => {
                  return res.status(200).json({result});
                })
                .catch((error) => {
                    logging.error("USER", error.message, error);
                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
        })
        .catch((error) => {
            logging.error("USER", error.message, error);
            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  logging.info("USER", "Getting all users");

  let query = "SELECT * FROM USER";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          //if (auth(results) === 1)
          return res.status(200).json({ results });
        })
        .catch((error) => {
          logging.error("USER", error.message, error);
          return res.status(200).json({
            message: error.message,
            error,
          });
        })
    })
    .catch((err) => {
      logging.error("USER", err.message, err);
      return res.status(500).json({
        message: err.message,
        err,
      });
    });
};

export default { getAllUser, createUser };
