import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Menu from './Pages/Menu.jsx'
import Wish from './Pages/Wish.jsx'
import GiftVideo from './Pages/GiftVideo.jsx'
import NotePage from './Pages/Note.jsx'
import MemorySite from './Pages/MemorySite.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/KLCHY_HAPPY_BIRTH_DAY">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menupage" element={<Menu />} />
        <Route path="/happybirthday" element={<Wish />} />
        <Route path="/GiftVideo" element={<GiftVideo />} />
        <Route path="/NotePage" element={<NotePage />} />
        <Route path="/MemorySite" element={<MemorySite />} />

      </Routes>
    </HashRouter>
  </StrictMode>,
)
