import UserRoutes from "./routes/User";
import express, { Response, Request, NextFunction } from "express";
import { PORT } from './config/config'
import bodyParser from "body-parser";

const router = express();
router.route('/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
  next();
});

router.use(UserRoutes);

router.listen(PORT, () => {
  console.log(`Express is listening at http://localhost:${PORT}`);
});