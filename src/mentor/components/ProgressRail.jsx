import React from 'react';

// Riel de progreso de sesión: índice sticky en desktop (resalta el slice activo
// al hacer scroll y permite saltar). En móvil se oculta y deja una barra fina arriba.
function ProgressRail({ items }) {
  const [activeId, setActiveId] = React.useState(items[0]?.id);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [items]);

  const activeIndex = Math.max(0, items.findIndex((it) => it.id === activeId));

  return (
    <>
      <div className="m-topbar" aria-hidden="true">
        <span style={{ width: `${scrollPct}%` }} />
      </div>

      <nav className="m-rail" aria-label="Índice de la sesión">
        <p className="m-rail-title">La sesión</p>
        <ol>
          {items.map((it, i) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`m-rail-link ${it.id === activeId ? 'is-active' : ''} ${
                  i < activeIndex ? 'is-done' : ''
                }`}
              >
                <span className="m-rail-num">{it.num}</span>
                <span className="m-rail-label">{it.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export default ProgressRail;
