import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';
import './index.css'
// Query client holds our cache and is passed down through the provider as a prop
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
          <App />
    </QueryClientProvider>
  </React.StrictMode>
)
