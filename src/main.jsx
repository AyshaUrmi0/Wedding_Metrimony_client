import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient()


import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { router } from "./Routes/router";
import AuthProvider from "./context/Authcontext/AuthProvider";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
   
    <AuthProvider>

    <ToastContainer position="top-center" />
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
   
   </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);