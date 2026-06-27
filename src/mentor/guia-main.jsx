import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';
import './mentor.css';
import Guia from './Guia.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Guia />
  </React.StrictMode>
);
