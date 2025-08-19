export const ApiEndpoints = {
  /** all api endpoints goes here */
} as const;

export type ApiEndpointsType = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
