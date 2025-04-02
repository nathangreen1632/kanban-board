import path from 'path';
import { fileURLToPath } from 'url';

// ⬇️ Needed to resolve __dirname in ES module environments (e.g., using "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All your existing imports...
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.use(express.json());
app.use(routes);

// ✅ Catch-all for client-side routing (React Router)
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
