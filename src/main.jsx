import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import ProjetIA from './pages/ProjetIA.jsx'
import ProjetVideo from './pages/ProjetVideo.jsx'
import ProjetDesign from './pages/ProjetDesign.jsx'
import ProjetWeb from './pages/ProjetWeb.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/projets/creation-ia"
          element={<ProjetIA />}
        />

        <Route
          path="/projets/video-publicitaire"
          element={<ProjetVideo />}
        />

        <Route
          path="/projets/creation-graphique"
          element={<ProjetDesign />}
        />

        <Route
          path="/projets/projet-web"
          element={<ProjetWeb />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)