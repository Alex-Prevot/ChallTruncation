import Element from "../controller/User";

var express = require('express');
var router = express.Router();


router.get("/get/user", (req, res) => {
    Element.getAllUser().then(result => {
        res.status(200).send(result);
    }). catch(err => {
        res.status(500).send("no good");
    })
})


router.post("/create/user", (req, res) => {
    let { username, password } = req.body;
    Element.createUserDb(username, password).then(result => {
        res.status(200).send("good");
    }).catch(err => {
        res.status(400).send("no good");
    })
});

export default router;