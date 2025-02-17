// server.js
import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

const app = express();


app.use(cors());
app.use(bodyParser.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
