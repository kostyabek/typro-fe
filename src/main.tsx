import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import { store } from "./state";
import { App } from "./ui";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  },
  queryCache: new QueryCache({
    onError: (error) => {
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
