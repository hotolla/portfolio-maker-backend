import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from './db.js';

const app = express();
const server = http.createServer(app);

dotenv.config();
app.use(cors());
app.use(express.json());

app.use((error, req, res, next)  => {
  console.log(error);
  res.status(error.status || 500).send();
});

server.listen(8000, () => {
  console.log('listening on 8000');
  connect();
});
