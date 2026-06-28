import mongoose, { Schema, model, type Model } from 'mongoose';

export interface ILeaderboardEntry {
  userEmail: string;
  userName: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
);

export const LeaderboardEntry =
  (mongoose.models.LeaderboardEntry as Model<ILeaderboardEntry> | undefined) ??
  model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);