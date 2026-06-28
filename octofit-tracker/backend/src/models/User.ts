import mongoose, { Schema, model, type Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  age: number;
  fitnessGoal: string;
  teamName: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true },
);

export const User =
  (mongoose.models.User as Model<IUser> | undefined) ??
  model<IUser>('User', userSchema);