import { QueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

declare module '@tanstack/react-query' {
  interface Register {
    // { message: string } update the below line to match your error response structure
    defaultError: AxiosError<{ message: string }>['response'];
  }
}

const queryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      gcTime: 30 * 60 * 1000, // 30 minutes
    },
    mutations: {
      retry: 1,
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export { queryClientConfig };
