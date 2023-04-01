import ReactDOM from 'react-dom/client';
import { store } from './state';
import { App } from './ui';
import { Provider } from 'react-redux';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error(error);
    }
  })
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
