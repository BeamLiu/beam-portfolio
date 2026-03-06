import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import './i18n/config'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/mfg-ai" element={<App />} />
        <Route path="/plm" element={<App />} />
        <Route path="/geek" element={<App />} />
        <Route path="/" element={<Navigate to="/mfg-ai" replace />} />
        <Route path="*" element={<Navigate to="/mfg-ai" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
