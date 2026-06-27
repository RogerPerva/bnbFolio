import React from 'react';

function Timeline({ items }) {
  return (
    <ol className="m-timeline">
      {items.map((item, i) => (
        <li key={item.week} className="m-timeline-item" style={{ '--i': i }}>
          <span className="m-timeline-dot" aria-hidden="true" />
          <div className="m-timeline-body">
            <span className="m-timeline-week">{item.week}</span>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
