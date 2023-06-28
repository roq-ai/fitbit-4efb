import { GymInterface } from 'interfaces/gym';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WorkoutSessionInterface {
  id?: string;
  name: string;
  description?: string;
  gym_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  gym?: GymInterface;
  user?: UserInterface;
  _count?: {};
}

export interface WorkoutSessionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  gym_id?: string;
  user_id?: string;
}
