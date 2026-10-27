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
export const BLOOM_URL = "https://bloom.bloomgard.co";
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
      "Bloomgard CRM is live today. It records every interaction on its own, ranks leads by how warm the conversation really is and tells you which deals will close. Bloom, for documents that prove themselves, is open as a test build, and scheduling and forecasting come next, all on the same AI core.",
    ],
    pillars: [
      {
        title: "AI CRM, live now",
        body: "Bloomgard CRM records calls, emails and meetings without anyone typing a note, scores each lead from what the customer actually said and shows the odds of every deal closing. Sales teams use it today.",
      },
      {
        title: "Scheduling agents",
        body: "Tell it who needs to meet and why. It checks everyone's calendar across time zones, proposes times, books the room and reschedules when plans change.",
      },
      {
        title: "Forecasts you can act on",
        body: "Revenue, hiring and supply-chain forecasts built from your CRM, finance and operations data, with an early warning the moment a number starts to drift.",
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
        title: "Predictive maintenance",
        body: "Vibration, sound and heat sensors on turbines, transformers and inverters feed models that spot wear weeks early, so crews replace parts on a schedule instead of after a breakdown.",
      },
      {
        title: "Real-time load balancing",
        body: "Forecasts demand area by area and shifts load between substations and sources minute by minute, keeping supply steady through peaks like a summer heatwave.",
      },
      {
        title: "Smart battery dispatch",
        body: "Decides when to charge batteries from surplus solar and wind and when to release that power, using price and demand forecasts to cover the evening peak.",
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
        title: "Autonomous cooling",
        body: "Reads temperatures chip by chip and tunes fans, chillers and liquid-cooling valves rack by rack, cutting the power spent on cooling without letting anything run hot.",
      },
      {
        title: "Instant failover",
        body: "Watches every server, disk and network link for early signs of failure and moves workloads to healthy machines in milliseconds, before customers see an error.",
      },
      {
        title: "Carbon-aware scheduling",
        body: "Moves flexible jobs such as AI training and backups to the hours and regions where clean power is cheapest and most plentiful.",
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
        title: "Quantum cloud APIs",
        body: "Send optimisation and simulation problems to quantum hardware through the same kind of API you already use for cloud computing. No physics degree required.",
      },
      {
        title: "AI error correction",
        body: "Models that learn each machine's noise and correct for it in real time, so results stay accurate as problems get bigger.",
      },
      {
        title: "Hybrid solvers",
        body: "Each problem is split between classical and quantum processors automatically, starting with portfolio risk, logistics routing and molecular simulation.",
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
        title: "Real-time fraud detection",
        body: "Scores every transaction in milliseconds using spending patterns, device signals and behaviour, and holds suspicious payments before the money leaves the account.",
      },
      {
        title: "Automated compliance",
        body: "Maps every transaction and process to the rules that apply, from RBI circulars to international anti-money-laundering standards, and flags gaps before an auditor does.",
      },
      {
        title: "Back-office automation",
        body: "AI agents handle reconciliations, KYC checks and regulatory reports, with every step logged so a person can review it.",
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
        title: "Personal AI tutor",
        body: "Explains concepts step by step, finds exactly where a student is stuck and adjusts the next question, in Hindi, Marathi, Tamil, English and more.",
      },
      {
        title: "Teacher co-pilot",
        body: "Drafts lesson plans, marks homework against the syllabus and writes progress reports, so teachers spend their time teaching.",
      },
      {
        title: "Skills and credentials",
        body: "Learning paths matched to the skills employers hire for, ending in credentials that anyone can verify.",
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
        title: "Clinical decision support",
        body: "Reads scans, lab results and patient history alongside the doctor and flags what needs a closer look. The doctor makes every call.",
      },
      {
        title: "Hospital operations",
        body: "Forecasts admissions and discharges to plan beds, staff rosters and supplies days ahead, so patients wait less.",
      },
      {
        title: "AI drug discovery",
        body: "Screens millions of candidate molecules on a computer and ranks the most promising, so labs test a short list instead of starting from scratch.",
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
