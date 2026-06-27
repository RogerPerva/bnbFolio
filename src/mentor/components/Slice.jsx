import React from 'react';
import { ArrowRight } from 'lucide-react';

// Franja de sesión: número de agenda + titular fuerte + subtítulo de una línea.
// Cierra opcionalmente con la barra de decisión consultiva, o una acción suelta.
function Slice({ id, num, kicker, title, subtitle, decision, action, alt = false, children }) {
  return (
    <section id={id} className={`m-slice ${alt ? 'm-slice--alt' : ''}`}>
      <div className="m-slice-inner" data-reveal>
        <header className="m-slice-head">
          <span className="m-slice-num">{num}</span>
          <div>
            {kicker && <p className="m-slice-kicker">{kicker}</p>}
            <h2>{title}</h2>
            {subtitle && <p className="m-slice-subtitle">{subtitle}</p>}
          </div>
        </header>

        <div className="m-slice-body">{children}</div>

        {decision && (
          <div className="m-decision">
            <div className="m-decision-main">
              <span className="m-decision-tag">Decisión</span>
              <p className="m-decision-text">{decision.decision}</p>
              <p className="m-decision-meta">
                {decision.why}
                {decision.risk && (
                  <span className="m-decision-risk"> · Evita: {decision.risk}</span>
                )}
              </p>
            </div>
            <p className="m-decision-action">
              <ArrowRight aria-hidden="true" />
              {decision.action}
            </p>
          </div>
        )}

        {!decision && action && (
          <p className="m-slice-action">
            <ArrowRight aria-hidden="true" />
            {action}
          </p>
        )}
      </div>
    </section>
  );
}

export default Slice;
