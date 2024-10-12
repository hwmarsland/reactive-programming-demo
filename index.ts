import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'index.html'));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});