import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ?? 3001;

app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.use(express.json());
app.use(routes);

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
