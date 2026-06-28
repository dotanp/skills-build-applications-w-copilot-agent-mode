import { Router, type Request, type Response } from 'express';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from './models/index.js';

export const apiRouter = Router();

apiRouter.get('/users/', async (_req: Request, res: Response) => {
  const data = await User.find().sort({ name: 1 }).lean();
  res.json({ resource: 'users', data });
});

apiRouter.get('/teams/', async (_req: Request, res: Response) => {
  const data = await Team.find().sort({ name: 1 }).lean();
  res.json({ resource: 'teams', data });
});

apiRouter.get('/activities/', async (_req: Request, res: Response) => {
  const data = await Activity.find().sort({ activityDate: -1 }).lean();
  res.json({ resource: 'activities', data });
});

apiRouter.get('/leaderboard/', async (_req: Request, res: Response) => {
  const data = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
  res.json({ resource: 'leaderboard', data });
});

apiRouter.get('/workouts/', async (_req: Request, res: Response) => {
  const data = await Workout.find().sort({ difficulty: 1, title: 1 }).lean();
  res.json({ resource: 'workouts', data });
});