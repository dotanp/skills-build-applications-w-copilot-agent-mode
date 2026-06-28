import mongoose, { Schema, model, type Model } from 'mongoose';

export interface IActivity {
  userEmail: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  activityDate: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    activityDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity =
  (mongoose.models.Activity as Model<IActivity> | undefined) ??
  model<IActivity>('Activity', activitySchema);