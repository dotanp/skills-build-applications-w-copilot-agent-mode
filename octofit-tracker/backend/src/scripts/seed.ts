import 'dotenv/config';
import mongoose from 'mongoose';
import { connectToDatabase } from '../db.js';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from '../models/index.js';

const users = [
  {
    name: 'Maya Chen',
    email: 'maya.chen@example.com',
    age: 29,
    fitnessGoal: 'Build endurance for a spring half marathon',
    teamName: 'Core Crusaders',
  },
  {
    name: 'Jordan Patel',
    email: 'jordan.patel@example.com',
    age: 34,
    fitnessGoal: 'Improve strength and mobility',
    teamName: 'Flex Appeal',
  },
  {
    name: 'Avery Johnson',
    email: 'avery.johnson@example.com',
    age: 26,
    fitnessGoal: 'Stay consistent with daily activity',
    teamName: 'Rep Set Go',
  },
];

const teams = [
  {
    name: 'Core Crusaders',
    mascot: 'Plank Panther',
    city: 'Seattle',
    memberCount: 12,
  },
  {
    name: 'Flex Appeal',
    mascot: 'Kettlebell Comet',
    city: 'Austin',
    memberCount: 9,
  },
  {
    name: 'Rep Set Go',
    mascot: 'Sprint Spark',
    city: 'Denver',
    memberCount: 15,
  },
];

const activities = [
  {
    userEmail: 'maya.chen@example.com',
    type: 'Outdoor run',
    durationMinutes: 42,
    caloriesBurned: 430,
    activityDate: new Date('2026-06-24T07:30:00Z'),
  },
  {
    userEmail: 'jordan.patel@example.com',
    type: 'Strength training',
    durationMinutes: 55,
    caloriesBurned: 510,
    activityDate: new Date('2026-06-25T18:00:00Z'),
  },
  {
    userEmail: 'avery.johnson@example.com',
    type: 'Cycling',
    durationMinutes: 38,
    caloriesBurned: 360,
    activityDate: new Date('2026-06-26T12:15:00Z'),
  },
];

const leaderboard = [
  {
    userEmail: 'jordan.patel@example.com',
    userName: 'Jordan Patel',
    teamName: 'Flex Appeal',
    points: 1840,
    rank: 1,
  },
  {
    userEmail: 'maya.chen@example.com',
    userName: 'Maya Chen',
    teamName: 'Core Crusaders',
    points: 1715,
    rank: 2,
  },
  {
    userEmail: 'avery.johnson@example.com',
    userName: 'Avery Johnson',
    teamName: 'Rep Set Go',
    points: 1620,
    rank: 3,
  },
];

const workouts = [
  {
    title: 'Tempo Builder Run',
    focusArea: 'Cardio endurance',
    difficulty: 'intermediate' as const,
    durationMinutes: 35,
    recommendedForGoal: 'Build endurance for a spring half marathon',
  },
  {
    title: 'Total Body Strength Circuit',
    focusArea: 'Strength',
    difficulty: 'beginner' as const,
    durationMinutes: 30,
    recommendedForGoal: 'Improve strength and mobility',
  },
  {
    title: 'Daily Movement Reset',
    focusArea: 'Mobility',
    difficulty: 'beginner' as const,
    durationMinutes: 20,
    recommendedForGoal: 'Stay consistent with daily activity',
  },
];

async function seed(): Promise<void> {
  console.log('Seed the octofit_db database with test data');
  await connectToDatabase();

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  await Promise.all([
    User.insertMany(users),
    Team.insertMany(teams),
    Activity.insertMany(activities),
    LeaderboardEntry.insertMany(leaderboard),
    Workout.insertMany(workouts),
  ]);

  console.log('Seed complete: users, teams, activities, leaderboard, and workouts inserted.');
}

seed()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });