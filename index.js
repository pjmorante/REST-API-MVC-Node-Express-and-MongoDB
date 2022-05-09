const express = require("express");
require('dotenv').config();

const v1PostRouter = require('./v1/routes/postRoutes');
const db = require('./database/db');

const app = express();

app.use(express.json());

app.use('/api/v1/posts', v1PostRouter);

app.listen(process.env.PORT, () => console.log(`API is listening on port ${process.env.PORT}`));