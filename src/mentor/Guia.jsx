import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { guia } from './guiaContent.js';
import ProgressRail from './components/ProgressRail.jsx';

function useReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('revealed'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Block({ block }) {
  if (block.p) return <p className="g-p">{block.p}</p>;
  if (block.h3) return <h3 className="g-h3">{block.h3}</h3>;
  if (block.note) return <p className="g-note">{block.note}</p>;
  if (block.list) {
    return (
      <ul className="g-list">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.ol) {
    return (
      <ol className="g-ol">
        {block.ol.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  return null;
}

function Guia() {
  useReveal();
  // El riel usa una etiqueta corta (label) para que el índice quepa sin scroll,
  // igual que en la mentoría; el título largo se conserva para el encabezado.
  const nav = guia.sections.map((s) => ({ id: s.id, num: s.num, label: s.label || s.title }));

  return (
    <main className="mentor guia">
      <header className="m-hero g-hero">
        <div className="m-hero-inner">
          <a className="g-back" href="../">
            <ArrowLeft aria-hidden="true" />
            Volver a la mentoría
          </a>
          <p className="m-hero-eyebrow">{guia.eyebrow}</p>
          <h1>{guia.title}</h1>
          <p className="g-intro">{guia.intro}</p>
        </div>
      </header>

      <div className="m-shell">
        <ProgressRail items={nav} />

        <div className="m-slices g-doc">
          {guia.sections.map((section) => (
            <section key={section.id} id={section.id} className="g-section">
              <div className="g-section-inner" data-reveal>
                <header className="g-section-head">
                  <span className="g-section-num">{section.num}</span>
                  <h2>{section.title}</h2>
                </header>
                <div className="g-section-body">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="m-closing">
        <div className="m-closing-inner" data-reveal>
          <a className="g-back g-back--footer" href="../">
            <ArrowLeft aria-hidden="true" />
            Volver a la mentoría
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Guia;
