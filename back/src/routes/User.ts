import Element from "../controller/User";
import CheckElem from "../middleware/checkAuth"
import express from "express"
var app = express.Router();


app.get("/get/user", (_req, res) => {
    Element.getAllUser().then(result => {
        res.status(200).send(result);
    }). catch(_err => {
        res.status(500).send("no good");
    })
})


app.post("/create/user", CheckElem.checkAuth, CheckElem.checkUser, (req, res) => {
    let { username, password } = req.body;
    Element.createUserDb(username, password).then(_result => {
        res.status(200).send("good");
    }).catch(_err => {
        res.status(400).send("no good");
    })
});

app.post("/login/user", CheckElem.checkLogin, (_req, res) => {
    res.status(200).send("good");
})


export default app;