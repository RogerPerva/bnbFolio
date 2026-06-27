import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';
import './mentor.css';
import Mentor from './Mentor.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mentor />
  </React.StrictMode>
);
