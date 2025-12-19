import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SignDawg from './assets/signdawg';
import LogDawg from './assets/logdawg';
import Dashdash from './assets/Dashdash';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignDawg />} />
        <Route path="/login" element={<LogDawg />} />
        <Route path="/dashboard" element={<Dashdash />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
