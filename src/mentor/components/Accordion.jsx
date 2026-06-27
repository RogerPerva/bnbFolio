import React from 'react';
import { ChevronDown } from 'lucide-react';

// Acordeón accesible basado en <details>/<summary> nativo (sin JS extra).
function Accordion({ summary, items }) {
  return (
    <details className="m-accordion">
      <summary>
        <span>{summary}</span>
        <ChevronDown className="m-accordion-chevron" aria-hidden="true" />
      </summary>
      <ul className="m-accordion-body">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </details>
  );
}

export default Accordion;
