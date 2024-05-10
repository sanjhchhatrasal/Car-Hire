import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Models from './Pages/Models/Models.jsx'
import Team from './Pages/Team/Team.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} > 
     <Route path='/' element={<Home />} />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact />} />
     <Route path='models' element={<Models />} />
     <Route path='team' element={<Team />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
