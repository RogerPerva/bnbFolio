import React from 'react';
import { HeartHandshake, Lightbulb, ArrowRight } from 'lucide-react';
import { mentor } from './mentorContent.js';
import Tag from './components/Tag.jsx';
import Slice from './components/Slice.jsx';
import ProgressRail from './components/ProgressRail.jsx';
import FlowDiagram from './components/FlowDiagram.jsx';
import ErrorCard from './components/ErrorCard.jsx';
import ChecklistGroup from './components/ChecklistGroup.jsx';
import ChatExample from './components/ChatExample.jsx';
import Timeline from './components/Timeline.jsx';
import CompareColumns from './components/CompareColumns.jsx';
import Roadmap from './components/Roadmap.jsx';
import Accordion from './components/Accordion.jsx';
import Callout from './components/Callout.jsx';

// Reveal-on-scroll reutilizando el patrón de App.jsx (IntersectionObserver).
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
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Mentor() {
  useReveal();
  const {
    owner, nav, hero, decisions, model, risks, prePublish,
    communication, pricing, days30, snackBar, roadmap, closing,
  } = mentor;

  return (
    <main className="mentor">
      {/* Slice 1 · Portada */}
      <header id="s1" className="m-hero">
        <div className="m-hero-inner">
          <p className="m-hero-eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="m-hero-subtitle">{hero.subtitle}</p>
          <div className="m-hero-chips">
            {hero.chips.map((chip) => (
              <Tag key={chip}>{chip}</Tag>
            ))}
          </div>
          <div className="m-hero-foot">
            <p className="m-hero-signature">{owner.name}</p>
            <a className="m-guide-link" href="guia/">
              Leer la guía completa
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div className="m-shell">
        <ProgressRail items={nav} />

        <div className="m-slices">
          {/* Slice 2 · Decisiones de hoy */}
          <Slice
            id="s2"
            num={decisions.num}
            kicker={decisions.kicker}
            title={decisions.title}
            subtitle={decisions.subtitle}
          >
            <div className="m-agenda">
              {decisions.items.map((item, i) => (
                <div key={item} className="m-agenda-card">
                  <span className="m-agenda-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Slice>

          {/* Slice 3 · Tu modelo */}
          <Slice
            id="s3"
            num={model.num}
            kicker={model.kicker}
            title={model.title}
            subtitle={model.subtitle}
            decision={model.decision}
            alt
          >
            <div className="m-attrs">
              {model.attributes.map((attr) => (
                <span key={attr} className="m-attr">{attr}</span>
              ))}
            </div>
            <FlowDiagram steps={model.flow} label="Ruta de escalamiento" />
            <Accordion summary={model.detalle.summary} items={model.detalle.items} />
          </Slice>

          {/* Slice 4 · Riesgos */}
          <Slice
            id="s4"
            num={risks.num}
            kicker={risks.kicker}
            title={risks.title}
            subtitle={risks.subtitle}
            action={risks.action}
          >
            <div className="m-risk-grid">
              {risks.items.map((risk) => (
                <ErrorCard key={risk.error} {...risk} />
              ))}
            </div>
            <Accordion summary="Ver detalle" items={risks.detail} />
          </Slice>

          {/* Slice 5 · Antes de publicar */}
          <Slice
            id="s5"
            num={prePublish.num}
            kicker={prePublish.kicker}
            title={prePublish.title}
            subtitle={prePublish.subtitle}
            alt
          >
            <Callout tone="warn" title="Sobre cámaras">
              {prePublish.cameraWarning}
            </Callout>
            <ChecklistGroup storageKey={prePublish.checklistKey} groups={prePublish.groups} />
            <Accordion summary="Ver detalle" items={prePublish.detail} />
            <Callout tone="note">{prePublish.note}</Callout>
          </Slice>

          {/* Slice 6 · Comunicación */}
          <Slice
            id="s6"
            num={communication.num}
            kicker={communication.kicker}
            title={communication.title}
            subtitle={communication.subtitle}
            action={communication.action}
          >
            <div className="m-keys">
              {communication.keys.map((key, i) => (
                <span key={key} className="m-key">
                  <span className="m-key-num">{String(i + 1).padStart(2, '0')}</span>
                  {key}
                </span>
              ))}
            </div>
            <ChatExample {...communication.example} />
            <Accordion summary="Ver detalle" items={communication.detail} />
          </Slice>

          {/* Slice 7 · Tarifa */}
          <Slice
            id="s7"
            num={pricing.num}
            kicker={pricing.kicker}
            title={pricing.title}
            subtitle={pricing.subtitle}
            action={pricing.action}
            alt
          >
            <div className="m-formula">
              <span className="m-formula-label">La fórmula</span>
              <code>{pricing.formula}</code>
            </div>
            <div className="m-price-grid">
              {pricing.cards.map((card, i) => (
                <div key={card.title} className="m-price-card">
                  <span className="m-price-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
            <Callout tone="note">{pricing.note}</Callout>
            <Accordion summary="Ver detalle" items={pricing.detail} />
            <Accordion
              summary={pricing.fiscal.summary}
              items={pricing.fiscal.rows.map((r) => `${r.label}: ${r.value}`).concat(
                `Nota: ${pricing.fiscal.note}`
              )}
            />
          </Slice>

          {/* Slice 8 · Primeros 30 días */}
          <Slice
            id="s8"
            num={days30.num}
            kicker={days30.kicker}
            title={days30.title}
            subtitle={days30.subtitle}
          >
            <Timeline items={days30.timeline} />
            <Callout tone="info" title="La clave">
              {days30.keyIdea}
            </Callout>
            <Accordion summary="Ver detalle" items={days30.detail} />
          </Slice>

          {/* Slice 9 · Snack bar */}
          <Slice
            id="s9"
            num={snackBar.num}
            kicker={snackBar.kicker}
            title={snackBar.title}
            subtitle={snackBar.subtitle}
            alt
          >
            <CompareColumns
              left={{ title: 'Aporta valor si…', items: snackBar.value }}
              right={{ title: 'Complica si…', items: snackBar.complicates }}
            />
            <Callout tone="info" title="Recomendación">
              {snackBar.recommendation}
            </Callout>
            <Accordion summary="Ver detalle" items={snackBar.detail} />
          </Slice>

          {/* Slice 10 · Ruta de arranque */}
          <Slice
            id="s10"
            num={roadmap.num}
            kicker={roadmap.kicker}
            title={roadmap.title}
            subtitle={roadmap.subtitle}
          >
            <Roadmap steps={roadmap.steps} />
          </Slice>
        </div>
      </div>

      {/* Cierre */}
      <footer className="m-closing">
        <div className="m-closing-inner" data-reveal>
          <Lightbulb className="m-closing-mark" aria-hidden="true" />
          <p className="m-closing-text">{closing.text}</p>
          <p className="m-closing-support">{closing.support}</p>
          <a className="m-guide-link m-guide-link--closing" href="guia/">
            Leer la guía completa
            <ArrowRight aria-hidden="true" />
          </a>
          <p className="m-closing-signature">
            <HeartHandshake aria-hidden="true" />
            {owner.name} · {owner.tagline}
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Mentor;
