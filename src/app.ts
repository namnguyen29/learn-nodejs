import * as http from "http";
import { appRoutes } from "./routes/routes";

// 1.Spin up a NodeJS server
const PORT = 3000; //app port
const nodeServer = http.createServer(appRoutes);

nodeServer.listen(PORT);
