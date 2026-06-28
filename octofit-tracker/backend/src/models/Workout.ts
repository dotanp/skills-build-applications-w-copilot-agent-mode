import mongoose, { Schema, model, type Model } from 'mongoose';

export interface IWorkout {
  title: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  recommendedForGoal: string;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    durationMinutes: { type: Number, required: true },
    recommendedForGoal: { type: String, required: true },
  },
  { timestamps: true },
);

export const Workout =
  (mongoose.models.Workout as Model<IWorkout> | undefined) ??
  model<IWorkout>('Workout', workoutSchema);