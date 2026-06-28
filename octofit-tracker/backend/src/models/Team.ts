import mongoose, { Schema, model, type Model } from 'mongoose';

export interface ITeam {
  name: string;
  mascot: string;
  city: string;
  memberCount: number;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    mascot: { type: String, required: true },
    city: { type: String, required: true },
    memberCount: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Team =
  (mongoose.models.Team as Model<ITeam> | undefined) ??
  model<ITeam>('Team', teamSchema);