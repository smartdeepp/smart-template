import { QueryClientProvider } from '@tanstack/react-query';

import { queryClientConfig } from '@app/lib/react-query';
import type { ComponentPropType } from '@app/types/global.types';

const TanstackQueryProvider: ComponentPropType = ({ children }) => {
  return <QueryClientProvider client={queryClientConfig}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
