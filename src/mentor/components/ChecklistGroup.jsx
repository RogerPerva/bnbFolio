import React from 'react';
import { Check, RotateCcw, ChevronDown } from 'lucide-react';

// Checklist por categorías colapsables, persistido en localStorage (sin backend).
// Cada categoría es un acordeón con su propio contador; arriba, el avance global.
function ChecklistGroup({ storageKey, groups }) {
  const allItems = React.useMemo(
    () => groups.flatMap((g) => g.items.map((item) => `${g.category}__${item}`)),
    [groups]
  );

  const [checked, setChecked] = React.useState(() => {
    if (typeof window === 'undefined') return {};
    try {
      return JSON.parse(window.localStorage.getItem(storageKey) || '{}');
    } catch {
      return {};
    }
  });

  React.useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* almacenamiento no disponible: sigue funcionando en memoria */
    }
  }, [checked, storageKey]);

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const reset = () => setChecked({});

  const doneCount = allItems.filter((id) => checked[id]).length;
  const total = allItems.length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div className="m-checklist">
      <div className="m-checklist-progress">
        <div className="m-checklist-progress-head">
          <span>
            <strong>{doneCount}</strong> de {total} listos · {pct}%
          </span>
          <button type="button" className="m-checklist-reset" onClick={reset}>
            <RotateCcw aria-hidden="true" />
            Reiniciar
          </button>
        </div>
        <div className="m-checklist-bar" role="presentation">
          <span style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="m-checklist-groups">
        {groups.map((group) => {
          const ids = group.items.map((item) => `${group.category}__${item}`);
          const groupDone = ids.filter((id) => checked[id]).length;
          const complete = groupDone === ids.length;
          return (
            <details key={group.category} className="m-checklist-group">
              <summary>
                <span className="m-checklist-cat">{group.category}</span>
                <span className={`m-checklist-count ${complete ? 'is-complete' : ''}`}>
                  {complete && <Check aria-hidden="true" />}
                  {groupDone}/{ids.length}
                </span>
                <ChevronDown className="m-checklist-chevron" aria-hidden="true" />
              </summary>
              <ul>
                {group.items.map((item) => {
                  const id = `${group.category}__${item}`;
                  const isChecked = !!checked[id];
                  return (
                    <li key={id}>
                      <label className={`m-check ${isChecked ? 'is-done' : ''}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(id)}
                        />
                        <span className="m-check-box" aria-hidden="true">
                          <Check />
                        </span>
                        <span className="m-check-label">{item}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}

export default ChecklistGroup;
