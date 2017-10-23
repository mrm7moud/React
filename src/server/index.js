import express from 'express';
import path from 'path';

import logger from './middleware/logger';

const PORT = 3000;

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, '../../public')));

app.post('/login', (req, res) => {
  // Login logic goes here
  setTimeout(() => {
    res.json({ username: 'mantagen', role: 'admin' });
  }, 2500);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
