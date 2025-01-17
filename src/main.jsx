import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
  
   <div className=' xl:max-w-[1780px] mx-auto'><RouterProvider router={router} /></div>
   <Toaster/>
   </QueryClientProvider>
 </AuthProvider>
  </StrictMode>,
)
