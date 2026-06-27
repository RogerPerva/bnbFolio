import React from 'react';
import { Check, X } from 'lucide-react';

// Dos columnas contrapuestas (aporta valor / complica). Para el snack bar.
function CompareColumns({ left, right }) {
  return (
    <div className="m-compare">
      <div className="m-compare-col m-compare-col--pro">
        <h3>{left.title}</h3>
        <ul>
          {left.items.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="m-compare-col m-compare-col--con">
        <h3>{right.title}</h3>
        <ul>
          {right.items.map((item) => (
            <li key={item}>
              <X aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompareColumns;
