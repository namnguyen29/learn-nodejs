// import { appRoutes } from "./routes/routes";
import express, { NextFunction, Request, Response } from "express";

// 1.Spin up a NodeJS server
const PORT = 3003; //app port
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("@here - next - middleware");
  res.send("<h1>Hello express</h1>");
  next();
});

app.listen(PORT);
