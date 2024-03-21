// index.js
import express from 'express';
import http from 'http';
import cors from 'cors';
import {setupSocket} from './socket/Socket.js'; // Adjust the import statement
import db from './mongoDB/Connection.js';
import route from './mongoDB/Routes.js';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

app.use(cors());

db();

app.use('/',route)


setupSocket(server); // Pass the HTTP server instance to the setupSocket function

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
