import React from 'react';

// Roadmap de cierre: pasos numerados en orden, con línea conectora.
function Roadmap({ steps }) {
  return (
    <ol className="m-roadmap">
      {steps.map((step, i) => (
        <li key={step} className="m-roadmap-step" style={{ '--i': i }}>
          <span className="m-roadmap-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="m-roadmap-text">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default Roadmap;
