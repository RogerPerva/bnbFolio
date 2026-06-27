import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

// Riesgo con jerarquía: el error manda, la consecuencia en gris, la prevención en acento.
function ErrorCard({ error, consequence, prevention }) {
  return (
    <article className="m-risk">
      <h3 className="m-risk-error">
        <AlertTriangle aria-hidden="true" />
        {error}
      </h3>
      <p className="m-risk-consequence">{consequence}</p>
      <p className="m-risk-prevention">
        <ShieldCheck aria-hidden="true" />
        {prevention}
      </p>
    </article>
  );
}

export default ErrorCard;
