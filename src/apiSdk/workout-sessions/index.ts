import axios from 'axios';
import queryString from 'query-string';
import { WorkoutSessionInterface, WorkoutSessionGetQueryInterface } from 'interfaces/workout-session';
import { GetQueryInterface } from '../../interfaces';

export const getWorkoutSessions = async (query?: WorkoutSessionGetQueryInterface) => {
  const response = await axios.get(`/api/workout-sessions${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createWorkoutSession = async (workoutSession: WorkoutSessionInterface) => {
  const response = await axios.post('/api/workout-sessions', workoutSession);
  return response.data;
};

export const updateWorkoutSessionById = async (id: string, workoutSession: WorkoutSessionInterface) => {
  const response = await axios.put(`/api/workout-sessions/${id}`, workoutSession);
  return response.data;
};

export const getWorkoutSessionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/workout-sessions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWorkoutSessionById = async (id: string) => {
  const response = await axios.delete(`/api/workout-sessions/${id}`);
  return response.data;
};
