import { WorkoutSessionInterface } from 'interfaces/workout-session';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GymInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  workout_session?: WorkoutSessionInterface[];
  user?: UserInterface;
  _count?: {
    workout_session?: number;
  };
}

export interface GymGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
