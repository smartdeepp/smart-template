export const QueryConstants = {
  DefaultPageNumber: 0,
  DefaultPageSize: 20,
  PageSizeOptions: [10, 20, 50, 100],
} as const;

export type QueryConstantsType = (typeof QueryConstants)[keyof typeof QueryConstants];
