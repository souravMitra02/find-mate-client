import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './routes/Routes.jsx';
import AuthProvider from './AuthProvider.jsx';
import 'aos/dist/aos.css';
import Aos from 'aos';

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
     
   </AuthProvider>
  </StrictMode>,
)
