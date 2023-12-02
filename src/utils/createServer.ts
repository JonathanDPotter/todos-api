import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import indexRoutes from "../routes/index.routes";
import errorHandler from "../middleware/errorHandler";

const createServer = () => {
  const server = express();
  server.use(express.json());
  server.use(express.static(path.join(__dirname, "../static")));
  server.use(morgan("dev"));
  server.use(cors({ origin: "*" }));
  server.use(helmet());
  server.use(indexRoutes);
  server.use(errorHandler);

  return server;
};

export default createServer;
