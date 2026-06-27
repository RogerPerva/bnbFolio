import React from 'react';
import { Info, Lightbulb, AlertTriangle } from 'lucide-react';

const ICONS = {
  note: Info,
  info: Lightbulb,
  warn: AlertTriangle,
};

function Callout({ tone = 'info', title, children }) {
  const Icon = ICONS[tone] ?? Info;
  return (
    <div className={`m-callout m-callout--${tone}`}>
      <span className="m-callout-icon">
        <Icon aria-hidden="true" />
      </span>
      <div className="m-callout-body">
        {title && <strong>{title}</strong>}
        {children}
      </div>
    </div>
  );
}

export default Callout;
