import logging from "./config/logging";
import bookRoutes from "./routes/User";
var http = require("http");
var bodyParser = require('body-parser');
var express = require('express')
const NAMESPACE = "Server";
const router = express();
router.route('/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req: any, res: any, next: any) => {
  if (req.method == "OPTIONS") {
    return res.status(200).json({});
  }
  next();
});

router.use(bookRoutes);

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