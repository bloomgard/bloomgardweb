export type DivisionSlug = "enterprise" | "energy" | "data" | "qntm" | "finance" | "education" | "life";

export type Division = {
  slug: DivisionSlug;
  index: string;
  name: string;
  summary: string;
  lede: string;
  ledeEm: string;
  body: string[];
  pillars: { title: string; body: string }[];
  vision: { headline: string; headlineEm: string; body: string };
};

export const CRM_URL = "https://cma.bloomgard.co";
export const CONTACT_EMAIL = "support@bloomgard.co";
export const DOCS_URL = "https://docs.bloomgard.co";

export const divisions: Division[] = [
  {
    slug: "enterprise",
    index: "01",
    name: "Enterprise",
    summary:
      "The AI operating layer for large companies. It starts with a CRM that's already live.",
    lede: "Your company runs on a thousand small tasks.",
    ledeEm: "We're teaching software to do them.",
    body: [
      "Every large company pays the same hidden tax: hours lost to logging calls, chasing follow-ups, copying numbers between spreadsheets and booking meetings across time zones.",
      "Bloomgard CRM is live today. It records every interaction on its own, ranks leads by how warm the conversation really is and tells you which deals will close. Scheduling and forecasting come next, built on the same AI core.",
    ],
    pillars: [
      {
        title: "A CRM that takes its own notes",
        body: "Every call, email and meeting is logged automatically. Leads are scored on what customers actually say, and every deal carries a live chance of closing.",
      },
      {
        title: "Calendars that sort themselves",
        body: "AI agents find meeting times across teams and time zones, so nobody has to ask “does Thursday work?” again.",
      },
      {
        title: "See next quarter now",
        body: "Forecasts for revenue, attrition and supply delays that arrive while there's still time to act on them.",
      },
    ],
    vision: {
      headline: "An organisation that runs itself,",
      headlineEm: "so its people can lead.",
      body: "We see companies where software handles the coordination: the notes, the follow-ups, the scheduling and the reporting. People spend their days on judgement, relationships and ideas. Every Bloomgard Enterprise product moves work in that direction.",
    },
  },
  {
    slug: "energy",
    index: "02",
    name: "Energy",
    summary: "AI that keeps the lights on while the grid goes green.",
    lede: "The grid is going green.",
    ledeEm: "We'll make sure it never goes dark.",
    body: [
      "Sun and wind don't keep office hours. As more of India's power comes from renewables, grids must balance supply that rises and falls by the minute, and a single failed turbine can black out a city.",
      "Bloomgard Energy will listen to every turbine, panel and substation at once. It will hear a fault weeks before it happens, move load before demand peaks and save the afternoon sun for the evening rush.",
    ],
    pillars: [
      {
        title: "Hear failures coming",
        body: "Acoustic and thermal sensing, read by AI, that spots hairline cracks in a turbine weeks before they turn into outages.",
      },
      {
        title: "A grid that balances itself",
        body: "Load shifted across cities in real time, so a May heatwave stays an inconvenience instead of a blackout.",
      },
      {
        title: "Sunshine after sunset",
        body: "Surplus solar and wind stored in batteries and released exactly when demand spikes.",
      },
    ],
    vision: {
      headline: "Clean power,",
      headlineEm: "as dependable as sunrise.",
      body: "We picture an India where every home and factory runs on renewable energy that never flickers. A grid that predicts its own failures, balances itself and saves the sun for the night is how we get there.",
    },
  },
  {
    slug: "data",
    index: "03",
    name: "Data",
    summary: "Self-driving data centres: cooler, cheaper and very hard to knock offline.",
    lede: "Data centres run hot.",
    ledeEm: "Ours will think cool.",
    body: [
      "Every UPI payment, video call and AI prompt lands in a building full of servers that burn power and throw off heat. When one of those buildings stumbles, the whole internet feels it.",
      "Bloomgard Data will run that building like an autopilot. It will tune cooling rack by rack, steer traffic away from trouble in milliseconds and save the heaviest work for when clean power is cheapest.",
    ],
    pillars: [
      {
        title: "Cooling with a brain",
        body: "Liquid cooling and airflow adjusted continuously from live chip temperatures across thousands of racks.",
      },
      {
        title: "Failover in a blink",
        body: "Faults detected and workloads moved in under a millisecond, before anyone notices something went wrong.",
      },
      {
        title: "Compute when the sun shines",
        body: "Heavy jobs scheduled for the hours when renewable power is plentiful and cheap.",
      },
    ],
    vision: {
      headline: "Infrastructure you never",
      headlineEm: "have to think about.",
      body: "We want data centres that cool themselves, heal themselves and follow the cleanest power available, so the digital services a billion people rely on simply stay on.",
    },
  },
  {
    slug: "qntm",
    index: "04",
    name: "QNTM",
    summary: "India's quantum cloud, working hand in hand with AI.",
    lede: "Some problems are too big for ordinary computers.",
    ledeEm: "We're building India's quantum cloud for them.",
    body: [
      "Designing a new drug, routing a nation's freight or stress-testing a vast portfolio can stall even the fastest classical machines. Quantum computers attack these problems in a fundamentally different way.",
      "Bloomgard QNTM will bring that power to the cloud, from India. AI will keep fragile qubits stable and tune quantum circuits on the fly, and every other Bloomgard division will be able to call on it.",
    ],
    pillars: [
      {
        title: "Quantum on tap",
        body: "Simple APIs that let everyday enterprise software hand its hardest maths to a quantum processor.",
      },
      {
        title: "AI that steadies qubits",
        body: "Neural networks that predict and cancel decoherence, so the answers come back accurate.",
      },
      {
        title: "A million futures in seconds",
        body: "Quantum Monte Carlo that runs a million portfolio scenarios while you wait.",
      },
    ],
    vision: {
      headline: "World-class quantum computing,",
      headlineEm: "built and served from India.",
      body: "We see Indian researchers, banks and hospitals using quantum computers as easily as they use the cloud today, on infrastructure designed here and run hand in hand with AI.",
    },
  },
  {
    slug: "finance",
    index: "05",
    name: "Finance",
    summary: "AI for banks: stop fraud, stay compliant and put the back office on autopilot.",
    lede: "Money moves in milliseconds.",
    ledeEm: "So should its protection.",
    body: [
      "India makes billions of digital payments every month. No team of people can watch every one of them, spot every new fraud pattern and keep pace with every change in the rulebook.",
      "Bloomgard Finance will. It will check each transaction as it happens, stop suspicious transfers before the money leaves, audit every flow against regulation and take routine work off bankers' desks.",
    ],
    pillars: [
      {
        title: "Fraud stopped mid-flight",
        body: "Models that read behaviour and transaction history together, blocking unauthorised transfers before they settle.",
      },
      {
        title: "Compliance that never sleeps",
        body: "Every flow checked continuously against changing Indian and international regulation.",
      },
      {
        title: "Signal from the noise",
        body: "Market data and global news distilled into insight institutions can act on.",
      },
    ],
    vision: {
      headline: "A financial system where",
      headlineEm: "trust is automatic.",
      body: "We imagine every payment checked, every rule followed and every customer protected without slowing anything down, so banks can spend their energy on serving people instead of policing transactions.",
    },
  },
  {
    slug: "education",
    index: "06",
    name: "Education",
    summary: "A patient personal tutor for every student, in the language they think in.",
    lede: "Every child deserves a great teacher.",
    ledeEm: "Every teacher deserves a tireless assistant.",
    body: [
      "India has around 250 million school students, and one teacher often faces a room of forty, each learning at a different pace. Most students never get one-to-one help.",
      "Bloomgard Education will give every learner a tutor that adapts to how they learn, in the language they think in, and give every teacher hours back from grading, planning and paperwork.",
    ],
    pillars: [
      {
        title: "A tutor in every pocket",
        body: "Explanations, practice and pace that adjust to each student, in Hindi, Marathi, Tamil, English and more.",
      },
      {
        title: "Teachers get their evenings back",
        body: "Lesson plans, grading and progress reports handled automatically.",
      },
      {
        title: "From classroom to career",
        body: "Learning paths that link what students study to the skills employers hire for, with credentials they can prove.",
      },
    ],
    vision: {
      headline: "Every learner, in every language,",
      headlineEm: "with a world-class teacher.",
      body: "We see a country where a child's postcode and mother tongue no longer decide the quality of their education, and where teachers are free to do what only teachers can: inspire.",
    },
  },
  {
    slug: "life",
    index: "07",
    name: "Life",
    summary: "AI for healthcare: earlier diagnosis, smoother hospitals and faster medicines.",
    lede: "Earlier answers. Shorter queues.",
    ledeEm: "Longer, healthier lives.",
    body: [
      "Doctors spend hours on paperwork, patients wait days for a diagnosis, and a new medicine can take more than a decade to reach a pharmacy shelf.",
      "Bloomgard Life will help clinicians read scans and records faster, keep beds, staff and supplies in step with demand, and narrow years of laboratory search into a shortlist worth testing. A doctor stays in charge of every decision.",
    ],
    pillars: [
      {
        title: "A second pair of eyes",
        body: "AI that reads scans, labs and records alongside clinicians and flags risks earlier.",
      },
      {
        title: "Hospitals that flow",
        body: "Beds, staff and supplies forecast ahead of demand, so more patients are seen sooner.",
      },
      {
        title: "Medicines, faster",
        body: "AI-guided molecular search that turns years of trial and error into a focused set of candidates.",
      },
    ],
    vision: {
      headline: "Healthcare that sees trouble",
      headlineEm: "before it arrives.",
      body: "We picture doctors with more time for patients, hospitals without crowded waiting rooms and medicines that reach people years sooner, with AI working quietly behind every clinician.",
    },
  },
];

export function getDivision(slug: DivisionSlug): Division {
  return divisions.find((d) => d.slug === slug)!;
}
