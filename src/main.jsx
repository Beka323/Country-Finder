import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './tailwind.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient({
    defaultOption: { queries: { retry: 2, retryDelay: 1000 } }
});
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
