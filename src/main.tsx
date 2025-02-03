import { createRoot } from 'react-dom/client'
import './ThemeToggle.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@theme-toggles/react/css/Classic.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact.tsx';

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>  
  </BrowserRouter>
);
