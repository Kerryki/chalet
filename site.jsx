// site.jsx — Le Livre des Vacances · Brampton
// Palm Club theme · mobile-first · single-page · 4 tabs.

// ─────────────────────────────────────────────────────────────
// Trip data
// ─────────────────────────────────────────────────────────────
const TRIP_NAME = "Le Livre des Vacances";
const TRIP_TAG  = "Brampton · ★4,94";

const LOGEMENT = {
  area: "Brampton",
  rating: "4,94",
  brs: 8,       // chambres
  beds: 9,      // lits — pas final
  bedsNote: "pas final",
  baths: 8,     // salles de bain privées (une par chambre)
  guests: 23,
};

const ROSTER = [
  "Hervé","Jacques","Eugénie","Romain","Mylène","Francine","Stephanie","Serges",
  "Beroukia","Emma","Manou","Illian","Paule.E","Lyndsay","Lovia","Leyanne",
  "Liam","Nathan","Nathan M.","Yohann","Logan","Ethan","Winnie",
];

const ROOMS = [
  { n: 1, ppl: ["Hervé","Eugénie"] },
  { n: 2, ppl: ["Jacques","Mylène"] },
  { n: 3, ppl: ["Romain","Francine"] },
  { n: 4, ppl: ["Serges","Stephanie"] },
  { n: 5, ppl: ["Manou","Lyndsay","Paule.E"] },
  { n: 6, ppl: ["Leyanne","Lovia","Beroukia"] },
  { n: 7, ppl: ["Yohann","Nathan M.","Logan","Ethan"] },
  { n: 8, ppl: ["Emma","Nathan","Liam","Illian"] },
];

const EXTRA_BED = { label: "Lit simple", person: "Winnie" };

const PACKING_LIST = [
  "Maillot de bain",
  "Tenues noir et blanc pour la dernière soirée",
  "Crème solaire",
  "Chargeur de téléphone",
  "Beaucoup d'énergie et beaucoup de patience",
];

const DAYS = [
  {
    id: "mer", label: "Mercredi", theme: "Départ",
    dressJour: "Jeans (short) + haut jaune pastel",
    items: [
      "Départ pour Brampton",
      "Faire cuire les haricots ce soir (pour le BHB)",
      "Préparer la pâte à beignets — ce soir, ou très tôt jeudi matin",
    ],
  },
  {
    id: "jeu", label: "Jeudi", theme: "Sortie — musée des sciences",
    dressJour: "Short beige + haut blanc",
    dressSoir: "Soirée spa : peignoir blanc, kit pédicure/thalasso, vin mousseux — puis soirée pyjama en satin (nude pour filles/femmes, noir pour hommes/garçons)",
    meals: {
      matin: ["BHB", "Petite salade ou fruit"],
      midi: ["✗"],
      soir: ["Épinards", "Spaghetti sauce viande hachée", "Barbecue"],
    },
  },
  {
    id: "ven", label: "Vendredi", theme: "Matinée sportive",
    dressJour: "Équipement de sport — pour parents et enfants",
    dressSoir: "Noir / bleu nuit et blanc",
    meals: {
      matin: ["Brunch fruits — pain perdu, œufs brouillés, bacon, lait/céréales — ou hot-dog + pancakes", "(ou plus simple : omelette)"],
      midi: ["Ndolé", "Fry rice"],
      soir: ["Grillade", "Lasagne", "Fry rice", "Boulettes", "Œuf à la coque → piment + condiment"],
    },
  },
  {
    id: "sam", label: "Samedi", theme: "Parc aquatique",
    dressJour: "Short jeans + haut au choix par famille — prévoir maillot de bain",
    meals: {
      matin: ["Déjeuner : salade + jambon + maïs doux"],
      midi: ["—"],
      soir: ["Sauce tomate + viande hachée", "Bouillon pâte de bœuf"],
      idees: ["Salade verte ou salade au pois chiches", "Avocat, tomates, oignons", "Steak de bœuf, concombres, feta", "Crêpes ou pancakes"],
    },
  },
  {
    id: "dim", label: "Dimanche", theme: "Départ",
    dressJour: "Au choix",
    items: ["Ne pas oublier : crème solaire, lunettes de soleil"],
    meals: {
      matin: ["Restes de la semaine + fruits, œufs et pancakes", "Croissant si possible"],
    },
  },
];

const NOTES = [
  { emoji: "🎲", title: "Programme", text: "Soirée jeux tous les soirs" },
  { emoji: "🍳", title: "Cuisine", text: "Rotation de 3 personnes différentes pour chaque repas" },
];

// ─────────────────────────────────────────────────────────────
// Palm Club theme tokens
// ─────────────────────────────────────────────────────────────
const T = {
  bg:        '#F1E8D2',
  bgDeep:    '#E8DDC2',
  surface:   '#FFFEFA',
  ink:       '#1B3A2D',
  inkSoft:   '#5C7264',
  primary:   '#C94A2C',
  primaryInk:'#FFFEFA',
  accent:    '#E0A832',
  accent2:   '#1B3A2D',
  border:    'rgba(27,58,45,0.13)',
  display:   '"DM Serif Display", "Tinos", Georgia, serif',
  body:      '"DM Sans", system-ui, sans-serif',
  avatarTints: ['#C94A2C', '#E0A832', '#1B3A2D', '#7A5C2E'],
};

// ─────────────────────────────────────────────────────────────
// Hooks
// ─────────────────────────────────────────────────────────────
function useLocal(key, init) {
  const [v, setV] = React.useState(() => {
    try {
      const s = localStorage.getItem(key);
      return s == null ? init : JSON.parse(s);
    } catch { return init; }
  });
  React.useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key, v]);
  return [v, setV];
}

// ─────────────────────────────────────────────────────────────
// Primitives
// ─────────────────────────────────────────────────────────────
function Pill({ children, bg, fg, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 11px', borderRadius: 999,
      fontSize: 11, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase',
      background: bg || T.surface, color: fg || T.ink, fontFamily: T.body,
      ...style,
    }}>{children}</span>
  );
}

function SectionTitle({ children, kicker }) {
  return (
    <div style={{ padding: '0 20px', marginBottom: 12 }}>
      {kicker && <div style={{
        fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
        color: T.inkSoft, fontWeight: 700, marginBottom: 4, fontFamily: T.body,
      }}>{kicker}</div>}
      <h2 style={{
        margin: 0, fontFamily: T.display, fontWeight: 400,
        fontSize: 30, lineHeight: 1, color: T.ink, letterSpacing: -0.3,
      }}>{children}</h2>
    </div>
  );
}

function Card({ children, style, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: T.surface, borderRadius: 18, padding: 16,
      border: `1px solid ${T.border}`,
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>{children}</div>
  );
}

function CheckRow({ id, children }) {
  const [done, setDone] = useLocal(`vac:check:${id}`, false);
  return (
    <button
      type="button"
      onClick={() => setDone(!done)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12, width: '100%',
        padding: '12px 4px', border: 'none', background: 'transparent',
        textAlign: 'left', cursor: 'pointer', fontFamily: T.body,
        borderBottom: `1px solid ${T.border}`,
        minHeight: 44,
      }}
    >
      <span aria-hidden style={{
        flex: '0 0 22px', height: 22, marginTop: 1, borderRadius: 7,
        background: done ? T.primary : 'transparent',
        border: `2px solid ${done ? T.primary : T.inkSoft + '88'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .15s',
      }}>
        {done && <svg width="13" height="13" viewBox="0 0 13 13"><path d="M2 6.5L5 9.5L11 3" stroke={T.primaryInk} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <span style={{
        flex: 1, fontSize: 15, lineHeight: 1.4,
        color: done ? T.inkSoft : T.ink,
        textDecoration: done ? 'line-through' : 'none',
        textDecorationColor: T.inkSoft + '66',
      }}>{children}</span>
    </button>
  );
}

function Avatar({ name, size = 30 }) {
  const initials = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const bg = T.avatarTints[h % T.avatarTints.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: '#FFFEFA',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.36, fontWeight: 700, fontFamily: T.body,
      letterSpacing: -0.3, flex: '0 0 auto',
      border: '2px solid ' + T.surface,
    }}>{initials}</div>
  );
}

function PalmDecor({ color = T.bg, opacity = 0.18 }) {
  return (
    <svg width="180" height="220" viewBox="0 0 180 220" style={{
      position: 'absolute', top: -20, right: -40, opacity, pointerEvents: 'none',
    }}>
      <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M 90 220 Q 60 140 30 80" />
        <path d="M 90 220 Q 90 130 80 40" />
        <path d="M 90 220 Q 120 140 150 80" />
        <path d="M 90 220 Q 100 150 130 60" />
        <path d="M 90 220 Q 80 150 50 60" />
        <path d="M 30 80 Q 40 60 50 50" />
        <path d="M 30 80 Q 15 70 5 75" />
        <path d="M 80 40 Q 95 25 105 30" />
        <path d="M 80 40 Q 65 30 60 40" />
        <path d="M 150 80 Q 140 60 130 50" />
        <path d="M 150 80 Q 165 70 175 75" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// ACCUEIL (Home)
// ─────────────────────────────────────────────────────────────
function AccueilTab() {
  return (
    <div style={{ paddingBottom: 28 }}>
      {/* Hero */}
      <div style={{
        padding: '32px 22px 32px',
        background: T.ink, color: T.bg,
        position: 'relative', overflow: 'hidden',
      }}>
        <PalmDecor color={T.bg} opacity={0.16} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: T.body, fontSize: 11, letterSpacing: 1.8,
            textTransform: 'uppercase', color: 'rgba(241,232,210,0.65)',
            fontWeight: 700, marginBottom: 10,
          }}>Présenté par</div>
          <h1 style={{
            margin: 0, fontFamily: T.display, fontWeight: 400,
            fontSize: 56, lineHeight: 0.95, color: T.bg, letterSpacing: -1,
          }}>{TRIP_NAME}</h1>
          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>📍 Brampton</Pill>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>★ {LOGEMENT.rating}</Pill>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>{LOGEMENT.guests} personnes</Pill>
          </div>
        </div>
      </div>

      {/* Logement card */}
      <div style={{ marginTop: 26 }}>
        <SectionTitle kicker="où on loge">le logement</SectionTitle>
        <div style={{ padding: '0 20px' }}>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{
              height: 120, background: `linear-gradient(135deg, #1B3A2D 0%, #2A5746 50%, #3F8A6E 100%)`,
              position: 'relative', overflow: 'hidden',
            }}>
              <PalmDecor color="#F1E8D2" opacity={0.22} />
              <div style={{
                position: 'absolute', bottom: 12, left: 16, color: T.bg, fontFamily: T.body,
                fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700,
                opacity: 0.8,
              }}>★ {LOGEMENT.rating}</div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{
                fontFamily: T.display, fontSize: 22, lineHeight: 1.1, color: T.ink,
                letterSpacing: -0.2,
              }}>Logement — {LOGEMENT.area}</div>

              <div style={{
                marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8,
              }}>
                {[
                  [LOGEMENT.brs, "chambres"],
                  [LOGEMENT.beds, "lits"],
                  [LOGEMENT.baths, "s. de bain privées"],
                ].map(([big, sm]) => (
                  <div key={sm} style={{
                    background: T.bg, borderRadius: 10, padding: '8px 4px', textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: T.display, fontSize: 20, color: T.ink, lineHeight: 1,
                    }}>{big}</div>
                    <div style={{
                      marginTop: 3, fontSize: 10, color: T.inkSoft, fontFamily: T.body,
                      letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 600,
                    }}>{sm}</div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 8, fontSize: 11, color: T.inkSoft, fontFamily: T.body, fontStyle: 'italic',
              }}>* nombre de lits {LOGEMENT.bedsNote}</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Notes */}
      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="à retenir">au programme</SectionTitle>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {NOTES.map(n => (
            <Card key={n.title} style={{
              padding: 14, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 22 }}>{n.emoji}</span>
              <div>
                <div style={{ fontFamily: T.display, fontSize: 18, color: T.ink, lineHeight: 1.1 }}>{n.title}</div>
                <div style={{ marginTop: 2, fontSize: 13, color: T.inkSoft, fontFamily: T.body }}>{n.text}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Roster preview */}
      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="la famille">{LOGEMENT.guests} personnes</SectionTitle>
        <div style={{ padding: '0 20px' }}>
          <Card style={{ padding: 14 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ROSTER.map(p => (
                <div key={p} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '5px 12px 5px 5px', borderRadius: 999,
                  background: T.bg, border: `1px solid ${T.border}`,
                }}>
                  <Avatar name={p} size={22} />
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: T.ink, fontFamily: T.body,
                  }}>{p}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// JOURS (Days)
// ─────────────────────────────────────────────────────────────
function MealBlock({ label, items }) {
  if (!items || !items.length) return null;
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{
        fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
        color: T.primary, fontWeight: 700, fontFamily: T.body, marginBottom: 4,
      }}>{label}</div>
      {items.map((it, i) => (
        <div key={i} style={{ fontSize: 14, color: T.ink, fontFamily: T.body, lineHeight: 1.5 }}>{it}</div>
      ))}
    </div>
  );
}

function JoursTab() {
  const [idx, setIdx] = useLocal('vac:day-idx', 0);
  const d = DAYS[idx];

  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '24px 20px 14px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 6,
        }}>le programme</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>Mercredi<br/>→ Dimanche</h1>
      </div>

      {/* day chips */}
      <div style={{ padding: '4px 20px 16px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {DAYS.map((dd, i) => {
          const selected = i === idx;
          return (
            <button
              key={dd.id}
              onClick={() => setIdx(i)}
              style={{
                flex: '0 0 auto', padding: '10px 14px', borderRadius: 999,
                border: `1.5px solid ${selected ? T.primary : T.border}`,
                background: selected ? T.primary : T.surface,
                color: selected ? T.primaryInk : T.ink,
                fontFamily: T.body, fontWeight: 600, fontSize: 13,
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >{dd.label}</button>
          );
        })}
      </div>

      {/* hero card */}
      <div style={{ padding: '0 20px' }}>
        <Card style={{ padding: 18, background: T.ink, border: `1px solid ${T.ink}`, color: T.bg }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
            color: 'rgba(241,232,210,0.6)', fontWeight: 700, fontFamily: T.body, marginBottom: 8,
          }}>{d.label}</div>
          <div style={{
            fontFamily: T.display, fontSize: 30, color: T.bg, lineHeight: 1.1, letterSpacing: -0.5,
          }}>{d.theme}</div>
        </Card>
      </div>

      {/* dress code */}
      {(d.dressJour || d.dressSoir) && (
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 20 }}>👗</span>
            <span style={{ fontFamily: T.display, fontSize: 22, color: T.ink }}>Dress code</span>
          </div>
          <Card style={{ padding: 16 }}>
            {d.dressJour && (
              <div style={{ marginBottom: d.dressSoir ? 10 : 0 }}>
                <div style={{
                  fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
                  color: T.primary, fontWeight: 700, fontFamily: T.body, marginBottom: 4,
                }}>Jour</div>
                <div style={{ fontSize: 14, color: T.ink, fontFamily: T.body, lineHeight: 1.5 }}>{d.dressJour}</div>
              </div>
            )}
            {d.dressSoir && (
              <div>
                <div style={{
                  fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
                  color: T.primary, fontWeight: 700, fontFamily: T.body, marginBottom: 4,
                }}>Soir</div>
                <div style={{ fontSize: 14, color: T.ink, fontFamily: T.body, lineHeight: 1.5 }}>{d.dressSoir}</div>
              </div>
            )}
          </Card>
        </div>
      )}

      {/* meals */}
      {d.meals && (
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 20 }}>🍽️</span>
            <span style={{ fontFamily: T.display, fontSize: 22, color: T.ink }}>Repas</span>
          </div>
          <Card style={{ padding: 16 }}>
            <MealBlock label="Matin" items={d.meals.matin} />
            <MealBlock label="Midi" items={d.meals.midi} />
            <MealBlock label="Soir" items={d.meals.soir} />
            <MealBlock label="Autres idées" items={d.meals.idees} />
          </Card>
        </div>
      )}

      {/* checklist items */}
      {d.items && d.items.length > 0 && (
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
            color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 10, paddingLeft: 4,
          }}>à faire</div>
          <Card style={{ padding: '4px 14px' }}>
            {d.items.map((it, i) => (
              <CheckRow key={i} id={`${d.id}-${i}`}>{it}</CheckRow>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAMBRES (Rooms)
// ─────────────────────────────────────────────────────────────
function ChambresTab() {
  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 6,
        }}>où on dort</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>8 chambres</h1>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ROOMS.map(r => (
          <Card key={r.n} style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{
                width: 54, height: 54, borderRadius: 14, flex: '0 0 auto',
                background: T.bg, border: `1.5px solid ${T.primary}`,
                color: T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: T.display, fontSize: 24,
              }}>{r.n}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: T.display, fontSize: 20, color: T.ink, lineHeight: 1.1 }}>Chambre {r.n}</div>
                <div style={{ marginTop: 3, fontSize: 13, color: T.inkSoft, fontFamily: T.body }}>{r.ppl.length} personne(s)</div>
              </div>
            </div>
            <div style={{
              marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}`,
              display: 'flex', flexWrap: 'wrap', gap: 8,
            }}>
              {r.ppl.map(p => (
                <span key={p} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '5px 12px 5px 5px', borderRadius: 999,
                  background: T.bg, border: `1px solid ${T.border}`,
                }}>
                  <Avatar name={p} size={22} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: T.ink, fontFamily: T.body }}>{p}</span>
                </span>
              ))}
            </div>
          </Card>
        ))}

        {/* extra bed */}
        <Card style={{ padding: 14, border: `1px dashed ${T.primary}80` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14, flex: '0 0 auto',
              background: T.bg, color: T.primary, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 22,
            }}>🛏️</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: T.display, fontSize: 18, color: T.ink }}>{EXTRA_BED.label}</div>
              <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Avatar name={EXTRA_BED.person} size={22} />
                <span style={{ fontSize: 13, fontWeight: 600, color: T.ink, fontFamily: T.body }}>{EXTRA_BED.person}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="tout le monde">{ROSTER.length} confirmés</SectionTitle>
        <div style={{ padding: '0 20px' }}>
          <Card style={{ padding: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 12, rowGap: 10 }}>
              {ROSTER.map((p, i) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 22, fontSize: 11, color: T.inkSoft, fontFamily: T.body,
                    fontWeight: 700, textAlign: 'right',
                  }}>{String(i + 1).padStart(2, '0')}</span>
                  <Avatar name={p} size={28} />
                  <span style={{ fontSize: 14, color: T.ink, fontFamily: T.body, fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LISTES
// ─────────────────────────────────────────────────────────────
function ListesTab() {
  const [open, setOpen] = useLocal('vac:list-open', 'pack');

  const Section = ({ id, title, kicker, children }) => {
    const isOpen = open === id;
    return (
      <div style={{
        borderRadius: 16, background: T.surface,
        border: `1px solid ${T.border}`, overflow: 'hidden',
      }}>
        <button
          onClick={() => setOpen(isOpen ? null : id)}
          style={{
            width: '100%', padding: '16px 18px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            background: 'transparent', border: 'none', cursor: 'pointer',
            textAlign: 'left', minHeight: 56,
          }}
        >
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase',
              color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 2,
            }}>{kicker}</div>
            <div style={{ fontFamily: T.display, fontSize: 22, color: T.ink }}>{title}</div>
          </div>
          <span style={{
            width: 30, height: 30, borderRadius: '50%',
            background: T.bg, color: T.ink, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .2s',
            fontSize: 20, fontWeight: 300, flex: '0 0 auto',
          }}>+</span>
        </button>
        {isOpen && <div style={{ padding: '0 18px 14px' }}>{children}</div>}
      </div>
    );
  };

  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 6,
        }}>tout ce qu'il faut savoir</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>les listes</h1>
      </div>

      <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>

        <Section id="pack" kicker="🎒 à ne pas oublier" title="Ce qu'il faut apporter">
          <div style={{ marginTop: 6 }}>
            {PACKING_LIST.map((it, i) => (
              <CheckRow key={i} id={`pack-${i}`}>{it}</CheckRow>
            ))}
          </div>
        </Section>

        <Section id="notes" kicker="ℹ️ à retenir" title="Programme & cuisine">
          <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NOTES.map(n => (
              <div key={n.title} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 12,
                background: T.bg, border: `1px solid ${T.border}`,
              }}>
                <span style={{ fontSize: 20 }}>{n.emoji}</span>
                <div>
                  <div style={{ fontFamily: T.body, fontWeight: 600, fontSize: 14, color: T.ink }}>{n.title}</div>
                  <div style={{ fontSize: 12, color: T.inkSoft, fontFamily: T.body }}>{n.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab bar
// ─────────────────────────────────────────────────────────────
function HomeIcon({ on }) {
  const c = on ? T.primary : T.inkSoft;
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 10L11 3L19 10V18C19 18.55 18.55 19 18 19H14V13H8V19H4C3.45 19 3 18.55 3 18V10Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill={on ? c : 'none'} fillOpacity={on ? 0.15 : 0} />
  </svg>;
}
function DaysIcon({ on }) {
  const c = on ? T.primary : T.inkSoft;
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="5" width="16" height="14" rx="2" stroke={c} strokeWidth="1.8" fill={on ? c : 'none'} fillOpacity={on ? 0.15 : 0} />
    <path d="M3 9H19" stroke={c} strokeWidth="1.8" />
    <path d="M7 3V6M15 3V6" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
  </svg>;
}
function RoomsIcon({ on }) {
  const c = on ? T.primary : T.inkSoft;
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 17V11C3 10.45 3.45 10 4 10H18C18.55 10 19 10.45 19 11V17" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill={on ? c : 'none'} fillOpacity={on ? 0.15 : 0} />
    <path d="M5 10V8C5 7.45 5.45 7 6 7H10C10.55 7 11 7.45 11 8V10" stroke={c} strokeWidth="1.8" />
    <path d="M2 17H20" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
  </svg>;
}
function ListsIcon({ on }) {
  const c = on ? T.primary : T.inkSoft;
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="3" width="14" height="16" rx="2" stroke={c} strokeWidth="1.8" fill={on ? c : 'none'} fillOpacity={on ? 0.15 : 0} />
    <path d="M7.5 8H14.5M7.5 11H14.5M7.5 14H12" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
  </svg>;
}

const TABS = [
  { id: 'accueil',  label: 'Accueil',  Icon: HomeIcon },
  { id: 'jours',    label: 'Jours',    Icon: DaysIcon },
  { id: 'chambres', label: 'Chambres', Icon: RoomsIcon },
  { id: 'listes',   label: 'Listes',   Icon: ListsIcon },
];

function TabBar({ active, onChange }) {
  return (
    <nav className="vac-tabbar" style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50,
      paddingLeft: 4, paddingRight: 4, paddingTop: 6,
      paddingBottom: `calc(env(safe-area-inset-bottom, 0px) + 6px)`,
      background: 'rgba(241,232,210,0.85)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: `1px solid ${T.border}`,
    }}>
      <div style={{
        maxWidth: 520, margin: '0 auto',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      }}>
        {TABS.map(tab => {
          const isOn = active === tab.id;
          const { Icon } = tab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              style={{
                flex: 1, padding: '6px 4px', border: 'none', background: 'transparent',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                cursor: 'pointer', minHeight: 52,
              }}
            >
              <Icon on={isOn} />
              <span style={{
                fontSize: 10, fontWeight: 700,
                color: isOn ? T.primary : T.inkSoft,
                fontFamily: T.body, letterSpacing: 0.3,
              }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
// App shell
// ─────────────────────────────────────────────────────────────
function App() {
  const [tab, setTab] = useLocal('vac:tab', 'accueil');
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [tab]);

  const tabMap = { accueil: AccueilTab, jours: JoursTab, chambres: ChambresTab, listes: ListesTab };
  const Body = tabMap[tab] || AccueilTab;

  return (
    <div style={{
      maxWidth: 520, margin: '0 auto', minHeight: '100vh',
      background: T.bg, color: T.ink, fontFamily: T.body,
      paddingBottom: `calc(env(safe-area-inset-bottom, 0px) + 78px)`,
      boxShadow: '0 0 60px rgba(27,58,45,0.06)',
    }}>
      <Body />
      <TabBar active={tab} onChange={setTab} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
