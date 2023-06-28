const mapping: Record<string, string> = {
  gyms: 'gym',
  users: 'user',
  'workout-sessions': 'workout_session',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
