import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store/store";
import { Provider } from "react-redux";
import RoutePage from "./Route/Route";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RoutePage />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
