import logging from "../config/logging";
import db from "../config/db";

interface User {
	username: string;
	password: string | undefined;
}

const createUserDb = async (username: string, password: string) => {
	return new Promise<User>((resolve, reject) => {
		let query = `INSERT INTO USER (login, password) VALUES (?,?)`;
		db.execute(query, [username, password], (err, result: any) => {
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

export default { createUserDb, getAllUser };
