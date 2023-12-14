import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import cors from 'cors'
import v1 from "./api/v1"

const app = express();
const port = process.env.PORT||3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', v1)
app.listen(port, () => {
  console.log(`Server http://localhost:${port} portda ishga tushdi.`);
});   