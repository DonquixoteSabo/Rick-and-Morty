import { QueryClient, QueryClientProvider } from 'react-query';

import { Home } from 'pages/Home/Home';

import { GlobalStyle } from 'styles/globalStyle';

const queryClient = new QueryClient();

export function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
}
