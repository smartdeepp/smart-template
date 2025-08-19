import type { FC, PropsWithChildren } from 'react';

export const ApiMethod = {
  Get: 'get',
  Post: 'post',
  Put: 'put',
  Delete: 'delete',
  Patch: 'patch',
} as const;

export type ApiMethodType = (typeof ApiMethod)[keyof typeof ApiMethod];

export type ComponentPropType<T = unknown> = FC<PropsWithChildren<T>>;
