import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { workoutSessionValidationSchema } from 'validationSchema/workout-sessions';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.workout_session
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getWorkoutSessionById();
    case 'PUT':
      return updateWorkoutSessionById();
    case 'DELETE':
      return deleteWorkoutSessionById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getWorkoutSessionById() {
    const data = await prisma.workout_session.findFirst(convertQueryToPrismaUtil(req.query, 'workout_session'));
    return res.status(200).json(data);
  }

  async function updateWorkoutSessionById() {
    await workoutSessionValidationSchema.validate(req.body);
    const data = await prisma.workout_session.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteWorkoutSessionById() {
    const data = await prisma.workout_session.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
