import logging from "./config/logging";
import UserRoutes from "./routes/User";
var http = require("http");
var bodyParser = require('body-parser');
var express = require('express')
const NAMESPACE = "Server";
const router = express();
router.route('/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

router.use(UserRoutes);

router.get((req: any, res: any, next: any) => {
  for (const [login, password] of Object.entries(UserRoutes)) {
    console.log(`${login}: ${password}`);
  }
});
//let allUser : User[] = JSON.parse(UserRoutes);


router.use((req: any, res: any, next: any) => {
  const error = new Error("Not found");
  res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);

httpServer.listen(8080, () =>
  logging.info(NAMESPACE, `Server is running "locahost":8080`)
);