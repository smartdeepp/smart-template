import { Toaster } from 'sonner';

import TanstackQueryProvider from './providers/TanstackQueryProviders';
import { Routes } from './routes';

function App() {
  return (
    <TanstackQueryProvider>
      <Routes />
      <Toaster richColors position="top-right" />
    </TanstackQueryProvider>
  );
}

export default App;
