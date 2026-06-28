import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { connectToDatabase } from './db.js';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());

app.get('/api/', (_req: Request, res: Response) => {
  res.json({
    service: 'OctoFit Tracker API',
    status: 'ok',
    baseUrl,
  });
});

async function start(): Promise<void> {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`OctoFit Tracker API listening on ${baseUrl}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
