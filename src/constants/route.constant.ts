export const Routes = {
  Root: '/',
  /** all main route goes here */
} as const;

export type RoutesType = (typeof Routes)[keyof typeof Routes];
