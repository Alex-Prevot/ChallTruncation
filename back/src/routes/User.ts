import getAllUser from "../controller/User";
var bodyParser = require('body-parser');

var express = require('express');
var router = express.Router();


router.get("/get/user", getAllUser.getAllUser);

router.post("/create/user", getAllUser.createUser);

export default router;