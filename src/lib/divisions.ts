export type DivisionSlug = "enterprise" | "energy" | "data" | "qntm" | "finance" | "education" | "life";

export type Division = {
  slug: DivisionSlug;
  index: string;
  name: string;
  summary: string;
  lede: string;
  body: string[];
  pillars: { title: string; body: string }[];
  metrics: { value: string; label: string }[];
};

export const CRM_URL = "https://cma.bloomgard.co";
export const CONTACT_EMAIL = "support@bloomgard.co";

export const divisions: Division[] = [
  {
    slug: "enterprise",
    index: "01",
    name: "Enterprise",
    summary:
      "An AI-native operating layer for large organisations, starting with our CRM, which is live today.",
    lede: "We're building the AI tools large companies should already have, starting with a CRM that's live today.",
    body: [
      "Large companies lose millions of hours every year to manual work: logging calls, chasing follow-ups, reconciling spreadsheets and scheduling across time zones.",
      "Bloomgard CRM already captures interactions, scores leads and forecasts outcomes for teams in production. From there we're building out the rest of the enterprise stack, one system at a time.",
    ],
    pillars: [
      {
        title: "AI CRM",
        body: "Logs every interaction automatically, scores leads from conversation sentiment and predicts close probability.",
      },
      {
        title: "Autonomous scheduling",
        body: "AI agents that coordinate across time zones and teams, removing the administrative bottleneck in large organisations.",
      },
      {
        title: "Predictive analytics",
        body: "Live views that forecast revenue, attrition and supply-chain delays before they show up in a quarterly review.",
      },
    ],
    metrics: [
      { value: "Live", label: "AI CRM in production" },
      { value: "3", label: "Core systems on the roadmap" },
      { value: "24/7", label: "Agentic operations" },
    ],
  },
  {
    slug: "energy",
    index: "02",
    name: "Energy",
    summary:
      "Software that keeps power grids stable and speeds up the shift to solar, wind and hydro.",
    lede: "Keeping power grids stable and well tuned as more of the supply comes from renewables.",
    body: [
      "A modern power plant is very complex. When a critical turbine fails, millions of people lose power. Bloomgard Energy will watch millions of signals across renewable infrastructure in real time.",
      "Predictive maintenance will warn engineers weeks before a machine fails, and grid-aware dispatch will make room for more solar, wind and hydro on the grid.",
    ],
    pillars: [
      {
        title: "Predictive maintenance",
        body: "Acoustic and thermal sensing, read by AI, to catch micro-fractures in turbines before they fail.",
      },
      {
        title: "Grid load balancing",
        body: "Spreading renewable load across cities so the grid holds through peaks like summer heatwaves.",
      },
      {
        title: "Renewable storage routing",
        body: "Storing surplus solar and wind in battery banks and releasing it when demand is highest.",
      },
    ],
    metrics: [
      { value: "Real-time", label: "Grid telemetry" },
      { value: "Weeks", label: "Of early failure warning" },
      { value: "Clean-first", label: "Dispatch logic" },
    ],
  },
  {
    slug: "data",
    index: "03",
    name: "Data",
    summary:
      "Autonomous control for data centres: cooling, traffic routing and uptime, run by AI.",
    lede: "Making data centres smarter, cooler and very hard to take down.",
    body: [
      "The internet runs on huge buildings full of servers that produce intense heat and use vast amounts of power. When they fail, commerce stops.",
      "Bloomgard Data will manage cooling physics automatically. It will tune liquid-cooling valves continuously and move traffic in milliseconds, so hardware never overheats and services stay up.",
    ],
    pillars: [
      {
        title: "Thermal automation",
        body: "HVAC and liquid-cooling control driven by live CPU temperatures across thousands of racks.",
      },
      {
        title: "Uptime assurance",
        body: "Sub-millisecond failover that detects hardware faults and moves workloads without disruption.",
      },
      {
        title: "Energy-aware compute",
        body: "Scheduling heavy compute for times when renewable power is cheap and plentiful.",
      },
    ],
    metrics: [
      { value: "<1ms", label: "Target failover" },
      { value: "1000s", label: "Racks per deployment" },
      { value: "Zero", label: "Downtime as the design goal" },
    ],
  },
  {
    slug: "qntm",
    index: "04",
    name: "QNTM",
    summary:
      "Cloud quantum infrastructure in India, run alongside our AI systems.",
    lede: "Bringing commercial quantum computing to the cloud, built in India and run alongside AI.",
    body: [
      "Classical computers are reaching their physical limits. For the hardest problems, such as molecular simulation or global supply-chain optimisation, they're simply too slow.",
      "We're building the foundations of cloud quantum computing in India. AI models will handle qubit error correction and tune quantum gates on the fly, and those gains will feed into every other Bloomgard division.",
    ],
    pillars: [
      {
        title: "Quantum cloud APIs",
        body: "Interfaces that let ordinary enterprise AI hand its hardest calculations to quantum processors.",
      },
      {
        title: "AI qubit management",
        body: "Neural networks that predict and suppress decoherence, so computations come out far more accurate.",
      },
      {
        title: "Financial acceleration",
        body: "Quantum Monte Carlo that runs millions of portfolio simulations in seconds.",
      },
    ],
    metrics: [
      { value: "India", label: "Sovereign quantum cloud" },
      { value: "AI × Q", label: "Hybrid pipelines" },
      { value: "10⁶", label: "Simulations, in seconds" },
    ],
  },
  {
    slug: "finance",
    index: "05",
    name: "Finance",
    summary:
      "AI for banks and institutions: fraud detection, compliance and automated operations.",
    lede: "Making institutional banking faster, safer and largely automated.",
    body: [
      "Global banks process millions of transactions a day. At that scale, human review can't reliably catch sophisticated fraud or keep up with compliance.",
      "We're building a financial operating system that checks every transaction as it happens, stops fraud before money moves and handles the routine work that slows banks down.",
    ],
    pillars: [
      {
        title: "Real-time fraud defence",
        body: "Deep models that read behavioural biometrics and transaction history to block unauthorised transfers.",
      },
      {
        title: "Algorithmic compliance",
        body: "Continuous checks of financial flows against changing international regulation.",
      },
      {
        title: "Market intelligence",
        body: "Models that combine global news sentiment with market data for institutional decisions.",
      },
    ],
    metrics: [
      { value: "Millions", label: "Of daily transactions" },
      { value: "Real-time", label: "Fraud interdiction" },
      { value: "Always-on", label: "Regulatory audit" },
    ],
  },
  {
    slug: "education",
    index: "06",
    name: "Education",
    summary:
      "Personal AI tutors and teaching tools, built for every learner in every language.",
    lede: "Giving every student a patient, personal tutor, and every teacher more time to teach.",
    body: [
      "India has the world's largest student population, yet a single teacher is often responsible for dozens of learners at very different levels. Most students never get one-to-one attention.",
      "Bloomgard Education will build AI tutors that adapt to each learner's pace and language, and give teachers tools that take on grading, planning and reporting, so classrooms can focus on understanding.",
    ],
    pillars: [
      {
        title: "Adaptive tutoring",
        body: "AI tutors that adjust explanations, pace and practice to each student, in the language they think in.",
      },
      {
        title: "Teacher co-pilot",
        body: "Lesson planning, grading and progress reports handled automatically, giving teachers hours back each week.",
      },
      {
        title: "Skills for work",
        body: "Learning paths that connect what students study to the skills employers need, with verifiable credentials.",
      },
    ],
    metrics: [
      { value: "1:1", label: "Attention for every learner" },
      { value: "Multilingual", label: "From day one" },
      { value: "Hours", label: "Returned to teachers weekly" },
    ],
  },
  {
    slug: "life",
    index: "07",
    name: "Life",
    summary:
      "AI for healthcare and life sciences: faster diagnosis, smarter hospitals and new medicines.",
    lede: "Using AI to help people live longer, healthier lives, from diagnosis to discovery.",
    body: [
      "Healthcare systems everywhere are stretched. Doctors spend hours on paperwork, diagnoses arrive late, and new medicines take more than a decade to reach patients.",
      "Bloomgard Life will build AI that helps clinicians read scans and records faster, keeps hospitals running smoothly and speeds up the search for new treatments, always with a doctor in the loop.",
    ],
    pillars: [
      {
        title: "Clinical intelligence",
        body: "Models that help clinicians read scans, labs and records, flagging risks early and supporting faster diagnosis.",
      },
      {
        title: "Hospital operations",
        body: "Forecasting beds, staff and supplies so hospitals can treat more patients with less waiting.",
      },
      {
        title: "Drug discovery",
        body: "AI-guided molecular search that narrows years of laboratory work into focused, testable candidates.",
      },
    ],
    metrics: [
      { value: "Earlier", label: "Detection and diagnosis" },
      { value: "Doctor-led", label: "AI that assists, never replaces" },
      { value: "Years", label: "Saved in discovery" },
    ],
  },
];

export function getDivision(slug: DivisionSlug): Division {
  return divisions.find((d) => d.slug === slug)!;
}
