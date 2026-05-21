// site.jsx — Nepo Vibezz · Tremblant Chalet Trip 2026
// Palm Club theme · mobile-first · single-page · 5 tabs.

// ─────────────────────────────────────────────────────────────
// Trip data
// ─────────────────────────────────────────────────────────────
const TRIP_NAME = "Nepo Vibezz";
const TRIP_TAG  = "Tremblant Takeover · Summer '26";
const TRIP_START = new Date('2026-07-02T18:00:00-04:00');
const TRIP_END   = new Date('2026-07-05T18:00:00-04:00');

const CHALET = {
  title: "Living in the nature 10 min from Tremblant",
  area: "Les Laurentides, Quebec · Canada",
  host: "Arnaud (Superhost)",
  cohost: "Lucia",
  rating: "4.87",
  reviews: 85,
  brs: 7, beds: 9, baths: 3.5, max: 14,
  reg: "315287",
  airbnb: "https://www.airbnb.ca/rooms/744323772462893119",
  perks: ["Hot tub (year-round)", "Ping pong + games room", "Garden + mountain view", "Self check-in · smart lock", "WiFi"],
};

const ROSTER = ["Nike","Kerry","Chimdi","Bolu","Marie","Ella","Hadidja","Godswill","Rose","Hafeezah","Sheilla","Toni","Saralie","Moeira","HK","Arinala","Sultan"];

const BIRTHDAYS = [
  { name: "Hadidja", day: "Thu · Jul 2", note: "kicking off the trip with cake 🎂" },
  { name: "Rose",    day: "Sun · Jul 5", note: "closing it out in style 🌹" },
];

const ROOMS = [
  { floor: 1, n: 1, bed: "Queen Bed",            ppl: ["Ella","Sheilla"] },
  { floor: 1, n: 2, bed: "2 Single Beds",        ppl: ["Nike","Chimdi"] },
  { floor: 1, n: 3, bed: "King + Air Mattress",  ppl: ["Marie","Hadidja","Hafeezah","Arinala"] },
  { floor: 1, n: 4, bed: "Queen Bed",            ppl: ["Kerry","Rose"] },
  { floor: 2, n: 5, bed: "Queen Bed",            ppl: ["Saralie","Moeira","HK"] },
  { floor: 2, n: 6, bed: "2 Single Beds",        ppl: ["Bolu","Sultan"] },
  { floor: 2, n: 7, bed: "2 Single Beds",        ppl: ["Godswill","Toni"] },
];

const DAYS = [
  {
    id: "d1", label: "Day 1", date: "Thursday, July 2", short: "Thu",
    dateISO: "2026-07-02",
    theme: "Arrival & Settle In", badge: "🚗 the long drive up",
    program: [
      { time: "all day",  title: "Hadidja's birthday 🎂", kind: "birthday" },
      { time: "10:00 AM", title: "Hit the road — Montréal → Tremblant", kind: "drive" },
      { time: "12:30 PM", title: "Grocery stop", kind: "errand" },
      { time: "6 – 8 PM", title: "Arrive at the chalet", kind: "milestone" },
      { time: "8:30 PM",  title: "First group dinner", kind: "meal" },
      { time: "10:00 PM", title: "Hot tub + bonfire", kind: "activity" },
      { time: "late",     title: "🎂 Hadidja's birthday cake", kind: "birthday" },
    ],
    blocks: [
      { time: "Morning", emoji: "☀️", items: [
        "Make sure everyone is packed",
        "Confirm driver(s) for each car",
        "Departure time locked in (TBD)",
        "Grocery stop on the way",
        "Road-trip playlist queued 🎶",
      ]},
      { time: "Afternoon", emoji: "🚙", items: [
        "Arrive at the chalet between 6 — 8pm",
        "Get the door code from the host (sent 24h before)",
        "House tour · claim your room (see Rooms tab)",
        "Unload groceries + supplies",
        "Set up speaker, drinks, snacks",
      ]},
      { time: "Evening", emoji: "🔥", items: [
        "Cook the first group dinner together",
        "Drinks & vibe out on the deck",
        "Hot tub session 🛁",
        "Bonfire / outdoor hang if weather plays",
        "🎂 Hadidja's birthday — go OFF",
      ]},
    ],
  },
  {
    id: "d2", label: "Day 2", date: "Friday, July 3", short: "Fri",
    dateISO: "2026-07-03",
    theme: "Full Send Day", badge: "🎉 the main event",
    program: [
      { time: "9:00 AM",  title: "Coffee + slow breakfast on the deck", kind: "meal" },
      { time: "11:00 AM", title: "Morning hike — Mont-Tremblant trails", kind: "activity" },
      { time: "1:00 PM",  title: "BBQ lunch at the chalet", kind: "meal" },
      { time: "3:00 PM",  title: "Lake day — swim + paddle", kind: "activity" },
      { time: "7:30 PM",  title: "Group BBQ dinner", kind: "meal" },
      { time: "9:30 PM",  title: "Games night + beer pong bracket", kind: "activity" },
      { time: "11:00 PM", title: "Bonfire + music", kind: "activity" },
    ],
    blocks: [
      { time: "Morning", emoji: "☕", items: [
        "Coffee & chill on the deck",
        "Slow breakfast in shifts",
        "Morning activity — hike, kayak, explore the area",
      ]},
      { time: "Afternoon", emoji: "🌞", items: [
        "Drive 10 min to Mont-Tremblant village",
        "Big group activity — swim, lake, trails, gondola",
        "BBQ or packed lunch outside",
        "Free time to relax at the chalet",
      ]},
      { time: "Evening", emoji: "🎵", items: [
        "Group BBQ dinner",
        "Games night — Uno, cards, beer pong, ping pong",
        "Bonfire + music",
        "Vibes until late 🌙",
      ]},
    ],
  },
  {
    id: "d3", label: "Day 3", date: "Saturday, July 4", short: "Sat",
    dateISO: "2026-07-04",
    theme: "Adventure & Relax", badge: "🌿 last full day — make it count",
    program: [
      { time: "10:30 AM", title: "Group brunch", kind: "meal" },
      { time: "12:30 PM", title: "Big group activity — zipline / ATVs", kind: "activity" },
      { time: "4:00 PM",  title: "Free time + hot tub", kind: "activity" },
      { time: "7:00 PM",  title: "Final group dinner — go all out", kind: "meal" },
      { time: "9:00 PM",  title: "Trip highlight reel + recap", kind: "milestone" },
      { time: "10:30 PM", title: "Last bonfire & celebration", kind: "activity" },
    ],
    blocks: [
      { time: "Morning", emoji: "🛌", items: [
        "Sleep in if you need it",
        "Group brunch",
        "Morning walk · canoe · waterfall trail",
      ]},
      { time: "Afternoon", emoji: "🚣", items: [
        "Big group activity — zipline, ATVs, lake day",
        "Last big outing of the trip",
        "Grocery run if anything's missing",
      ]},
      { time: "Evening", emoji: "🌙", items: [
        "Final group dinner — go all out",
        "Trip highlight reel + group recap",
        "Last bonfire & celebration",
        "Pre-pack for tomorrow's checkout",
      ]},
    ],
  },
  {
    id: "d4", label: "Day 4", date: "Sunday, July 5", short: "Sun",
    dateISO: "2026-07-05",
    theme: "Checkout & Head Home", badge: "🏠 take us home",
    program: [
      { time: "all day",  title: "Rose's birthday 🌹", kind: "birthday" },
      { time: "9:30 AM",  title: "Final group breakfast", kind: "meal" },
      { time: "11:00 AM", title: "Clean rooms + common areas", kind: "errand" },
      { time: "1:00 PM",  title: "Trash out, sweep for personal items", kind: "errand" },
      { time: "3:00 PM",  title: "Group photo 📸", kind: "milestone" },
      { time: "4 – 6 PM", title: "Checkout · drive home", kind: "drive" },
    ],
    blocks: [
      { time: "Morning", emoji: "🧹", items: [
        "🌹 Rose's birthday — give her her flowers",
        "Final breakfast all together",
        "Clean rooms + common areas thoroughly",
        "Strip bedsheets if the host requires",
        "Take out ALL the trash",
        "Sweep for personal items left behind",
        "Return keys / confirm lockup with Arnaud",
      ]},
      { time: "Drive home", emoji: "🚗", items: [
        "Settle ALL shared costs before leaving",
        "Group photo before departure 📸",
        "Out between 4 — 6pm",
        "Estimated arrival home (TBD)",
      ]},
    ],
  },
];

const GROCERIES = {
  "Breakfast": ["Eggs","Bread","Butter","Jam","Peanut butter","Orange juice","Coffee","Milk","Cereal","Yogurt"],
  "Lunch & Dinner": ["Pasta","Rice","Potatoes","Chicken","Ground beef","Hot dogs","Burgers + buns","Ketchup","Mustard","Mayo","BBQ sauce","Soy sauce","Peppers","Onions","Corn","Tomatoes","Salad mix"],
  "Snacks": ["Chips","Dips","Crackers","Fruit","Nuts"],
  "Drinks": ["Water (cases)","Juice","Sodas","Beer","Mix drinks","Ice"],
  "Essentials": ["Paper plates","Cups","Napkins","Aluminum foil","Trash bags","Dish soap","Sponge","Lighter / matches"],
  "Extras": ["Football","Table-tennis balls","Bluetooth speaker"],
};

const ACTIVITY_IDEAS = [
  { name: "Group Uno",                note: "high stakes only" },
  { name: "Love Island watch party",  note: "couch + popcorn" },
  { name: "Talent show",              note: "everyone has to perform 😤" },
  { name: "Beer pong tournament",     note: "bracket on the fridge" },
  { name: "Ping pong bracket",        note: "the chalet has a table 🏓" },
  { name: "Card games night",         note: "spades · president · poker" },
];

const HOUSE_RULES = [
  "Respect the chalet — leave it how we found it",
  "No smoking indoors",
  "Everyone pitches in for cooking & cleaning",
  "Keep the noise reasonable after midnight (we PLAY tho)",
  "All shared costs settled BEFORE we leave",
  "Nike holds the chalet code at all times 🔑",
  "No outside guests without group approval",
];

const EMERGENCY = [
  ["🚒", "Emergency services", "911"],
  ["🏥", "Nearest hospital", "Hôpital de Sainte-Agathe-des-Monts (~30 min)"],
  ["🏔️", "Closest town · pharmacy", "Mont-Tremblant village (~10 min)"],
  ["🏠", "Chalet host", "Arnaud · message via Airbnb"],
  ["👤", "Co-host", "Lucia"],
  ["🔑", "Door code holder", "Nike"],
  ["📋", "QC registration #", "315287"],
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
// Hooks & date helpers
// ─────────────────────────────────────────────────────────────
function todayISO() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d - tz).toISOString().slice(0, 10);
}

const KIND_STYLE = {
  meal:      { color: '#E0A832', label: 'Meal',     emoji: '🍽️' },
  activity:  { color: '#C94A2C', label: 'Activity', emoji: '🎉' },
  birthday:  { color: '#C94A2C', label: 'Birthday', emoji: '🎂' },
  drive:     { color: '#5C7264', label: 'Drive',    emoji: '🚗' },
  errand:    { color: '#5C7264', label: 'To do',    emoji: '✓'  },
  milestone: { color: '#1B3A2D', label: 'Moment',   emoji: '⭐' },
};

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

function useCountdown(target) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const ms = Math.max(0, target.getTime() - now);
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
    done: ms <= 0,
  };
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
  const [done, setDone] = useLocal(`nepo:check:${id}`, false);
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


function ProgramRow({ ev, dark, last }) {
  const k = KIND_STYLE[ev.kind] || KIND_STYLE.activity;
  const isBirthday = ev.kind === 'birthday';
  const timeColor  = dark ? 'rgba(241,232,210,0.6)' : T.inkSoft;
  const titleColor = dark ? T.bg : T.ink;
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '72px 14px 1fr', alignItems: 'baseline',
      gap: 10, padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${dark ? 'rgba(241,232,210,0.08)' : T.border}`,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: timeColor, fontFamily: T.body,
        textTransform: 'uppercase', letterSpacing: 0.6,
        fontVariantNumeric: 'tabular-nums',
      }}>{ev.time}</div>
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: k.color, marginTop: 6,
        boxShadow: isBirthday ? `0 0 0 3px ${k.color}26` : 'none',
      }}></div>
      <div style={{
        fontSize: 14, fontFamily: T.body, color: titleColor,
        fontWeight: isBirthday ? 700 : 500, lineHeight: 1.35,
      }}>{ev.title}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────
function HomeTab() {
  const c = useCountdown(TRIP_START);
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
          }}>{TRIP_TAG}</div>
          <h1 style={{
            margin: 0, fontFamily: T.display, fontWeight: 400,
            fontSize: 72, lineHeight: 0.9, color: T.bg, letterSpacing: -1.5,
          }}>{TRIP_NAME}</h1>
          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>Jul 2 – 5, 2026</Pill>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>Les Laurentides 🇨🇦</Pill>
            <Pill bg="rgba(241,232,210,0.15)" fg={T.bg}>17 of us</Pill>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div style={{ padding: '24px 20px 4px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 10,
        }}>{c.done ? "we are SO back" : "we touch grass in"}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {[['DAYS', c.d], ['HRS', c.h], ['MIN', c.m], ['SEC', c.s]].map(([lbl, v]) => (
            <div key={lbl} style={{
              background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 14, padding: '14px 4px 10px', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: T.display, fontSize: 30, lineHeight: 1, color: T.ink,
                fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5,
              }}>{String(v).padStart(2, '0')}</div>
              <div style={{
                marginTop: 6, fontSize: 10, letterSpacing: 1.2, fontWeight: 700,
                color: T.inkSoft, fontFamily: T.body,
              }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chalet card */}
      <div style={{ marginTop: 26 }}>
        <SectionTitle kicker="where we're staying">the chalet</SectionTitle>
        <div style={{ padding: '0 20px' }}>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {/* Image placeholder strip */}
            <div style={{
              height: 140, background: `linear-gradient(135deg, #1B3A2D 0%, #2A5746 50%, #3F8A6E 100%)`,
              position: 'relative', overflow: 'hidden',
            }}>
              <PalmDecor color="#F1E8D2" opacity={0.22} />
              <div style={{
                position: 'absolute', bottom: 12, left: 16, color: T.bg, fontFamily: T.body,
                fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700,
                opacity: 0.8,
              }}>★ {CHALET.rating} · {CHALET.reviews} reviews</div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{
                fontFamily: T.display, fontSize: 22, lineHeight: 1.1, color: T.ink,
                letterSpacing: -0.2,
              }}>{CHALET.title}</div>
              <div style={{ marginTop: 6, fontSize: 13, color: T.inkSoft, fontFamily: T.body }}>
                {CHALET.area}
              </div>

              <div style={{
                marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
              }}>
                {[
                  [CHALET.brs, "bedrooms"],
                  [CHALET.beds, "beds"],
                  [CHALET.baths, "baths"],
                  ["17", "of us"],
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
                marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.border}`,
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                {CHALET.perks.map(p => (
                  <div key={p} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 13, color: T.ink, fontFamily: T.body,
                  }}>
                    <span style={{ color: T.primary, fontWeight: 700 }}>·</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <a href={CHALET.airbnb} target="_blank" rel="noopener" style={{
                marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, padding: '13px 16px', borderRadius: 12,
                background: T.primary, color: T.primaryInk,
                fontFamily: T.body, fontWeight: 700, fontSize: 14, textDecoration: 'none',
                letterSpacing: 0.2,
              }}>
                Open on Airbnb
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              <div style={{
                marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: 12, color: T.inkSoft, fontFamily: T.body,
              }}>
                <span>Hosted by {CHALET.host} + {CHALET.cohost}</span>
                <span>QC #{CHALET.reg}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Birthdays */}
      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="🎉 birthdays on this trip">we're celebrating</SectionTitle>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {BIRTHDAYS.map(b => (
            <Card key={b.name} style={{
              padding: 16, background: T.surface,
              border: `1px solid ${T.primary}40`,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <Avatar name={b.name} size={48} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: T.display, fontSize: 22, color: T.ink, lineHeight: 1,
                }}>{b.name}</div>
                <div style={{
                  marginTop: 4, fontSize: 13, color: T.inkSoft, fontFamily: T.body,
                }}>{b.day} · {b.note}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ marginTop: 28, padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {[
            ['4', 'days'],
            ['7', 'bedrooms'],
            ['3', 'nights'],
            ['10 min', 'to Tremblant'],
          ].map(([big, sm]) => (
            <Card key={sm} style={{ padding: '14px 14px 12px' }}>
              <div style={{
                fontFamily: T.display, fontSize: 32, color: T.ink, lineHeight: 1, letterSpacing: -0.5,
              }}>{big}</div>
              <div style={{
                marginTop: 4, fontSize: 12, color: T.inkSoft,
                fontFamily: T.body, textTransform: 'uppercase', letterSpacing: 1.1, fontWeight: 600,
              }}>{sm}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Roster preview */}
      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="the squad">17 of us</SectionTitle>
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
// DAYS
// ─────────────────────────────────────────────────────────────
function DaysTab() {
  const effectiveToday = todayISO();

  const dayStatus = (dayISO) => {
    if (effectiveToday === dayISO) return 'today';
    if (effectiveToday < dayISO) return 'upcoming';
    return 'done';
  };

  // default idx: today if in range, else first upcoming, else last
  const computeDefaultIdx = () => {
    const todayIdx = DAYS.findIndex(d => d.dateISO === effectiveToday);
    if (todayIdx >= 0) return todayIdx;
    const nextIdx = DAYS.findIndex(d => d.dateISO > effectiveToday);
    if (nextIdx >= 0) return nextIdx;
    return DAYS.length - 1;
  };

  const [idx, setIdx] = useLocal('nepo:day-idx', computeDefaultIdx());

  const d = DAYS[idx];
  const status = dayStatus(d.dateISO);
  const isToday = status === 'today';
  const isDone  = status === 'done';

  const statusPill =
    isToday ? { bg: T.primary, fg: T.primaryInk, text: 'Today · live' } :
    isDone  ? { bg: 'rgba(241,232,210,0.18)', fg: T.bg, text: '✓ Done' } :
              { bg: 'rgba(241,232,210,0.18)', fg: T.bg, text: 'Upcoming' };

  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '24px 20px 14px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 6,
        }}>the plan</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>4 days,<br/>0 chill</h1>
      </div>

      {/* day chips */}
      <div style={{
        padding: '4px 20px 16px', display: 'flex', gap: 8, overflowX: 'auto',
      }}>
        {DAYS.map((dd, i) => {
          const st = dayStatus(dd.dateISO);
          const selected = i === idx;
          const chipBg =
            selected ? T.primary :
            st === 'today' ? T.bg :
            T.surface;
          const chipBorder =
            selected ? T.primary :
            st === 'today' ? T.primary :
            T.border;
          const chipFg = selected ? T.primaryInk : T.ink;
          return (
            <button
              key={dd.id}
              onClick={() => setIdx(i)}
              style={{
                flex: '0 0 auto', padding: '10px 14px', borderRadius: 999,
                border: `1.5px solid ${chipBorder}`,
                background: chipBg, color: chipFg,
                fontFamily: T.body, fontWeight: 600, fontSize: 13,
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .15s',
                opacity: st === 'done' && !selected ? 0.5 : 1,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                textDecoration: st === 'done' && !selected ? 'line-through' : 'none',
              }}
            >
              <span style={{ opacity: 0.7 }}>{dd.short}</span>
              <span>{dd.theme}</span>
              {st === 'today' && !selected && (
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: T.primary,
                }}></span>
              )}
            </button>
          );
        })}
      </div>

      {/* hero card */}
      <div style={{ padding: '0 20px' }}>
        <Card style={{
          padding: 18, background: T.ink, border: `1px solid ${T.ink}`, color: T.bg,
          opacity: isDone ? 0.7 : 1,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
            marginBottom: 8,
          }}>
            <div style={{
              fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
              color: 'rgba(241,232,210,0.6)', fontWeight: 700, fontFamily: T.body,
            }}>{d.date}</div>
            <Pill bg={statusPill.bg} fg={statusPill.fg} style={{
              fontSize: 10, padding: '4px 8px',
            }}>{statusPill.text}</Pill>
          </div>
          <div style={{
            fontFamily: T.display, fontSize: 32,
            color: T.bg, lineHeight: 1, letterSpacing: -0.5,
          }}>{d.theme}</div>
          <div style={{
            marginTop: 10, fontSize: 14, color: 'rgba(241,232,210,0.75)', fontFamily: T.body,
          }}>{d.badge}</div>
        </Card>
      </div>

      {/* timed program */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
        }}>
          <span style={{ fontSize: 20 }}>🗓️</span>
          <span style={{ fontFamily: T.display, fontSize: 22, color: T.ink }}>The day</span>
        </div>
        <Card style={{ padding: '4px 14px' }}>
          {d.program.map((ev, i) => (
            <ProgramRow key={i} ev={ev} dark={false} last={i === d.program.length - 1} />
          ))}
        </Card>
      </div>

      {/* checklists by block */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 10,
          paddingLeft: 4,
        }}>checklists</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {d.blocks.map((b, bi) => (
            <div key={b.time}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
              }}>
                <span style={{ fontSize: 20 }}>{b.emoji}</span>
                <span style={{
                  fontFamily: T.display, fontSize: 22, color: T.ink,
                }}>{b.time}</span>
              </div>
              <Card style={{ padding: '4px 14px' }}>
                {b.items.map((it, ii) => (
                  <CheckRow key={ii} id={`${d.id}-${bi}-${ii}`}>{it}</CheckRow>
                ))}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ROOMS
// ─────────────────────────────────────────────────────────────
function RoomsTab() {
  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{
          fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkSoft, fontWeight: 700, fontFamily: T.body, marginBottom: 6,
        }}>where you're sleeping</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>7 rooms,<br/>17 of us</h1>
      </div>

      {[1, 2].map(fl => (
        <div key={fl} style={{ marginTop: 20 }}>
          <div style={{
            padding: '0 20px', display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10,
          }}>
            <span style={{ fontFamily: T.display, fontSize: 24, color: T.ink }}>
              {fl === 1 ? "1st" : "2nd"} floor
            </span>
            <span style={{ flex: 1, height: 1, background: T.border }}></span>
            <span style={{
              fontSize: 11, color: T.inkSoft, fontFamily: T.body,
              fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
            }}>{ROOMS.filter(r => r.floor === fl).length} rooms</span>
          </div>

          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ROOMS.filter(r => r.floor === fl).map(r => (
              <Card key={r.n} style={{ padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{
                    width: 54, height: 54, borderRadius: 14, flex: '0 0 auto',
                    background: T.bg, border: `1.5px solid ${T.primary}`,
                    color: T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: T.display, fontSize: 24,
                  }}>{r.n}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: T.display, fontSize: 20, color: T.ink, lineHeight: 1.1,
                    }}>Bedroom {r.n}</div>
                    <div style={{
                      marginTop: 3, fontSize: 13, color: T.inkSoft, fontFamily: T.body,
                    }}>{r.bed} · sleeps {r.ppl.length}</div>
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
                      <span style={{
                        fontSize: 13, fontWeight: 600, color: T.ink, fontFamily: T.body,
                      }}>{p}</span>
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 28 }}>
        <SectionTitle kicker="the whole crew">all 17 of us</SectionTitle>
        <div style={{ padding: '0 20px' }}>
          <Card style={{ padding: 14 }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 12, rowGap: 10,
            }}>
              {ROSTER.map((p, i) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 22, fontSize: 11, color: T.inkSoft, fontFamily: T.body,
                    fontWeight: 700, textAlign: 'right',
                  }}>{String(i + 1).padStart(2, '0')}</span>
                  <Avatar name={p} size={28} />
                  <span style={{
                    fontSize: 14, color: T.ink, fontFamily: T.body, fontWeight: 500,
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
// LISTS
// ─────────────────────────────────────────────────────────────
function ListsTab() {
  const [open, setOpen] = useLocal('nepo:list-open', 'groceries');
  const groups = Object.keys(GROCERIES);

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
        }}>everything we need</div>
        <h1 style={{
          margin: 0, fontFamily: T.display, fontSize: 44, lineHeight: 0.95,
          color: T.ink, letterSpacing: -0.8,
        }}>the lists</h1>
      </div>

      <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>

        <Section id="groceries" kicker="🛒 shopping" title="Grocery list">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 6 }}>
            {groups.map(g => (
              <div key={g}>
                <div style={{
                  fontFamily: T.body, fontSize: 12, fontWeight: 700,
                  letterSpacing: 1.2, textTransform: 'uppercase',
                  color: T.primary, marginBottom: 4,
                }}>{g}</div>
                <div>
                  {GROCERIES[g].map((it, i) => (
                    <CheckRow key={`${g}-${i}`} id={`gro-${g}-${i}`}>{it}</CheckRow>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="activities" kicker="🎲 the agenda" title="Activity ideas">
          <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ACTIVITY_IDEAS.map((a, i) => (
              <div key={a.name} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 12,
                background: T.bg, border: `1px solid ${T.border}`,
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 10, flex: '0 0 auto',
                  background: T.primary, color: T.primaryInk,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: T.display, fontSize: 14,
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: T.body, fontWeight: 600, fontSize: 14, color: T.ink }}>{a.name}</div>
                  <div style={{ fontSize: 12, color: T.inkSoft, fontFamily: T.body }}>{a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="rules" kicker="✋ the law" title="House rules">
          <div style={{ marginTop: 6 }}>
            {HOUSE_RULES.map((r, i) => (
              <div key={i} style={{
                padding: '10px 0',
                borderBottom: i < HOUSE_RULES.length - 1 ? `1px solid ${T.border}` : 'none',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: T.display, fontSize: 14, color: T.primary, lineHeight: 1.3, flex: '0 0 20px',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{
                  flex: 1, fontSize: 14, color: T.ink, fontFamily: T.body, lineHeight: 1.4,
                }}>{r}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="emergency" kicker="🚨 just in case" title="Emergency info">
          <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {EMERGENCY.map(([ic, lbl, val]) => (
              <div key={lbl} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0', borderBottom: `1px solid ${T.border}`,
              }}>
                <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{ic}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                    color: T.inkSoft, fontWeight: 700, fontFamily: T.body,
                  }}>{lbl}</div>
                  <div style={{
                    fontFamily: T.body, fontWeight: 600, fontSize: 15, color: T.ink, marginTop: 1,
                  }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pack" kicker="🎒 don't forget" title="What to bring">
          <div style={{
            marginTop: 6, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8,
          }}>
            {[
              "Swimsuit", "Towel", "Bug spray", "Sunscreen",
              "Hiking shoes", "Flip flops", "Warm layer", "Sleep stuff",
              "Phone charger", "Toiletries", "Vibes 💅", "Patience 😅",
            ].map((it, i) => (
              <div key={i} style={{
                padding: '10px 12px', borderRadius: 10,
                background: T.bg, border: `1px solid ${T.border}`,
                fontSize: 13, fontFamily: T.body, color: T.ink, fontWeight: 500,
              }}>{it}</div>
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
  { id: 'home',  label: 'Home',  Icon: HomeIcon },
  { id: 'days',  label: 'Days',  Icon: DaysIcon },
  { id: 'rooms', label: 'Rooms', Icon: RoomsIcon },
  { id: 'lists', label: 'Lists', Icon: ListsIcon },
];

function TabBar({ active, onChange }) {
  return (
    <nav className="nepo-tabbar" style={{
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
  const [tab, setTab] = useLocal('nepo:tab', 'home');
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [tab]);

  const tabMap = { home: HomeTab, days: DaysTab, rooms: RoomsTab, lists: ListsTab };
  const Body = tabMap[tab] || HomeTab;

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
