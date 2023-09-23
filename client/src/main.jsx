import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client (not recommended, use ReactDOM.render instead)
import { RouterProvider } from "react-router-dom"; // Import RouterProvider for routing

import { QueryClient, QueryClientProvider } from "react-query"; //import reacct query

import "./index.css"; // Import global CSS styles
import { router } from "./router/Router.jsx"; // Import the router configuration

const queryClient = new QueryClient();

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use the RouterProvider to provide the routing configuration */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
