import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MensajeEnviado from './Components/MensajeEnviado/MensajeEnviado.jsx';
import MensajeError from './Components/ErrorMail/ErrorMail.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/enviado",
    element: <MensajeEnviado />
  },
  {
    path: "/error",
    element: <MensajeError />
  },


 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)