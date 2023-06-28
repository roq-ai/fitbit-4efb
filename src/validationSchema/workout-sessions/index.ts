import * as yup from 'yup';

export const workoutSessionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  gym_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
