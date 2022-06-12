import Element from "../controller/User";
import { StatusCodes } from 'http-status-codes'

interface UserController {
    login: string;
}

function checkAuth(req: any, res: any, next: any) {
    const response = req.body;
    Element.getAllUser().then(result => {
        const myObjStr = JSON.stringify(result);
        let obj: UserController[] = JSON.parse(myObjStr);
        const myUser = obj.find((elem => elem.login === response.username));
        if (myUser === undefined)
            next();
        else
            return res.status(StatusCodes.BAD_REQUEST).send("This account already exists");
    })
}

interface UserLogin {
    login: string;
    password: string;
}

function checkLogin(req: any, res: any, next: any) {
    const response = req.body;
    Element.getAllUser().then(result => {
        const myObjStr = JSON.stringify(result);
        let obj: UserLogin[] = JSON.parse(myObjStr);
        const myUserLogin = obj.find(elem => elem.login === "admin" && elem.password === response.password);
        if (myUserLogin !== undefined)
            next();
        else
            return res.status(StatusCodes.BAD_REQUEST).send("This account does't exist");
    })
}

function checkUser(req: any, res: any, next: any) {
    const response = req.body;
    let newUser = "";
    if (response.username.length > 12) {
        for (const value of response.username) {
            if (value == ' ') { break; }
            newUser += value;
        }
        response.username = newUser;
        next();
    } else
        next();
}

export default { checkAuth, checkLogin, checkUser };