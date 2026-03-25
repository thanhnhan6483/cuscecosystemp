import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import CuscIsooPage from './pages/CuscIsooPage.tsx';
import CuscUiisPage from './pages/CuscUiisPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cusc-isoo" element={<CuscIsooPage />} />
          <Route path="/cusc-uiis" element={<CuscUiisPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
