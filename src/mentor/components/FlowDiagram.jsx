import React from 'react';

// Diagrama simple de pasos encadenados (cajas + flechas en CSS).
function FlowDiagram({ steps, label }) {
  return (
    <div className="m-flow" role="img" aria-label={label || steps.join(' → ')}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <span className="m-flow-node">{step}</span>
          {i < steps.length - 1 && (
            <span className="m-flow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default FlowDiagram;
