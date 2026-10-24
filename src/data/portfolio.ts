export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  client: string;
  role: string;
  period: string;
  year: string;
  summary: string;
  /** one line for the ledger row */
  spec: string;
  stack: string[];
  metrics: Metric[];
  problem: string[];
  built: { lead: string; body: string }[];
  outcome: string[];
  image?: string;
  imageAlt?: string;
  /** used instead of a screenshot when the product is internal or unlaunchable */
  plate?: { heading: string; rows: [string, string][] };
  live?: { label: string; href: string };
  alsoBuilt?: { name: string; note: string }[];
};

export const identity = {
  name: "Adekoya Gbolahan",
  firstName: "Adekoya",
  lastName: "Gbolahan",
  role: "Full-stack developer",
  stackLine: "React · Next.js · TypeScript · Laravel · Node.js · MySQL",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "adekoyaadetola365@gmail.com",
  phone: "+234 813 026 2852",
  thesis: "I build the software schools run on.",
  standfirst:
    "Four years of full-stack work — React, Next.js and Laravel — spent mostly on the systems behind education: student records for 10,000+ learners, school platforms, competition software. I studied microbiology, then illustrated children's lessons for two years, then learned to build the products myself. That order still shapes how I work.",
  available: "Open to senior frontend / full-stack roles",
  freelanceNote:
    "Small, focused freelance work is welcome when it does not conflict with my day job — usually a design-heavy React build, a Laravel API, or fixing a platform that has outgrown its first version.",
};

export const links = {
  github: { label: "GitHub", href: "https://github.com/gbkoya", handle: "gbkoya" },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adekoya-gbolahan-754720201",
    handle: "adekoya-gbolahan",
  },
  instagram: { label: "Instagram", href: "https://instagram.com/koyagb", handle: "@koyagb" },
  cv: { label: "CV", href: "/adekoya-gbolahan-cv.pdf" },
};

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Laravel",
  "PHP",
  "Node.js",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "Jest",
  "Postman",
  "Figma",
];

export const method = [
  {
    step: "01",
    title: "Read the system",
    body: "Before any code: who touches this, what breaks for them now, and what the data underneath actually looks like. Most slow features are a data-model problem wearing a UI costume.",
  },
  {
    step: "02",
    title: "Model the data first",
    body: "Tables, relationships and permissions get settled before the screens. On school software that decision is the difference between adding a term's results in an afternoon and rebuilding enrolment.",
  },
  {
    step: "03",
    title: "Ship in slices",
    body: "Thin vertical slices — one screen, wired end to end, in front of real users — instead of a six-week branch. Reviewed early, so direction changes cost hours, not weeks.",
  },
  {
    step: "04",
    title: "Measure, then tighten",
    body: "Payload size, query count, render cost, response time. I care about the numbers because someone on a mid-range Android phone on Nigerian mobile data is the person who actually gets to judge the work.",
  },
];

export const trackRecord = [
  {
    company: "MIVA Open University",
    role: "Software Developer — Student Information System",
    period: "Jan 2024 — Present",
    note: "Student records, results and analytics dashboards for 10,000+ students; migrating legacy components to React.",
  },
  {
    company: "Archware Technologies",
    role: "Frontend Engineer → Software Developer",
    period: "Jan 2021 — Present",
    note: "Five-plus product platforms for the education and property sectors, plus the sites around them.",
  },
  {
    company: "Disporty",
    role: "Frontend Developer (Contract)",
    period: "Feb 2024 — May 2024",
    note: "Game-management platform for EA FC Pro Clubs competitions, built with an international team.",
  },
  {
    company: "Teesas",
    role: "Digital Illustrator",
    period: "Jan 2020 — Dec 2021",
    note: "50+ illustrations for children's educational animation; character design and storyboarding.",
  },
];

export const education = {
  degree: "B.Sc Microbiology",
  school: "McPherson University",
  period: "2015 — 2019",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "miva-student-information-system",
    index: "01",
    title: "Student Information System",
    client: "MIVA Open University",
    role: "Software Developer, SIS team",
    period: "Jan 2024 — Present",
    year: "2024",
    summary:
      "The record system a university runs on: enrolment, results, academic records and the dashboards staff use to see what is happening.",
    spec: "10,000+ students · legacy migration to React · real-time academic dashboards",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "MySQL"],
    metrics: [
      { value: "10,000+", label: "students on the system" },
      { value: "≥25%", label: "performance gain from the React migration" },
      { value: "3", label: "audiences served: students, academic staff, administration" },
    ],
    problem: [
      "A student information system at university scale is unforgiving: one wrong record is a graduate who cannot prove their degree. MIVA's SIS serves 10,000+ students, and the parts I inherited were built with older patterns — heavier components, slower screens, and features that were awkward for academic staff to work with day to day.",
      "The academic side also needed to see the institution, not just a table: how a programme is performing, where results are lagging, what is happening term by term.",
    ],
    built: [
      {
        lead: "Migrated legacy components to React",
        body: "Replaced the old rendering approach component by component, keeping the SIS usable throughout — no flag day, no freeze. Each slice went out behind the existing screens, so staff kept working while the floor was replaced.",
      },
      {
        lead: "Built features against real academic workflows",
        body: "Enrolment, records and results flows developed with the academic staff who run them, rather than from a spec written away from the data.",
      },
      {
        lead: "Added data-visualisation dashboards",
        body: "Reporting views that turn academic records into something a department head can read at a glance — trends over time instead of exported spreadsheets.",
      },
    ],
    outcome: [
      "System performance improved by at least 25% through the React migration.",
      "10,000+ students are served by the platform, with academic records and results flowing through one source of truth.",
      "Academic staff read performance from dashboards instead of assembling spreadsheets by hand.",
    ],
    plate: {
      heading: "Student Information System · MIVA Open University",
      rows: [
        ["Students", "10,000+"],
        ["Records", "Enrolment · Results · Academic history"],
        ["Migration", "Legacy components → React"],
        ["Reporting", "Academic dashboards, term over term"],
        ["Access", "Students · Academic staff · Administration"],
      ],
    },
    alsoBuilt: [
      { name: "miva-sis-admin-web", note: "Next.js admin surface for the SIS." },
    ],
  },
  {
    slug: "edu-result-school-platform",
    index: "02",
    title: "School Platform",
    client: "EduResult / Archware Edu Lite",
    role: "Full-stack — Laravel and Next.js",
    period: "2024 — Present",
    year: "2024",
    summary:
      "A school management platform where a school can sign itself up, choose what it needs, pay for it, and start working the same day.",
    spec: "multi-module school platform · self-serve onboarding · card checkout · soft-delete architecture",
    stack: ["Laravel", "PHP", "Next.js", "TypeScript", "MySQL", "Paystack"],
    metrics: [
      { value: "3 steps", label: "landing page to live workspace" },
      { value: "0", label: "manual steps to onboard a school" },
      { value: "100%", label: "deletions reversible, never lost" },
    ],
    problem: [
      "Nigerian schools run on record keeping that is mostly paper, spreadsheets and WhatsApp. Software that could replace it is usually sold the old way: a demo call, a quote, a manual setup, and a price list that has to be edited in the code.",
      "The platform also had to solve a trust problem before a features problem. A school that has just paid is not willing to lose a term's records to a bug, and a school owner who clicks delete in a panic should still get their data back.",
    ],
    built: [
      {
        lead: "Self-serve registration with real payments",
        body: "A three-step signup — school details, administrator account, then the modules they want — that prices the plan live and takes card payment inline through Paystack before the school is created.",
      },
      {
        lead: "Billing that follows the subscription, not the code",
        body: "Subscriptions are driven by a billing period, with the base plan and each add-on becoming an explicit record on the school's plan. Prices live in configuration and ship through the API, so a price change does not need a deploy.",
      },
      {
        lead: "Product rule: nothing is ever hard deleted",
        body: "Deletes are soft, enforced through an observer, and cascade through the relationships they belong to. Every removed record is restorable, and deleted entities stay visible to administrators in their own views.",
      },
      {
        lead: "Modular by school, not by feature flag",
        body: "A school only sees the modules it pays for, gated on their plan records, with the platform's own catalogue keeping the configuration honest.",
      },
    ],
    outcome: [
      "A school can go from the landing page to a working workspace on its own, including payment, without anyone touching a server.",
      "Pricing and module mix are data — the commercial side changes without an engineering release.",
      "Data loss is off the table by design: recovery is a routine action, not a database restore.",
    ],
    plate: {
      heading: "EduResult · platform specification",
      rows: [
        ["Onboarding", "3 steps, self-serve"],
        ["Billing", "Plan + module add-ons, per period"],
        ["Payments", "Paystack, inline at signup"],
        ["Pricing", "Served from the API, not the build"],
        ["Deletes", "Soft, cascading, restorable"],
      ],
    },
  },
  {
    slug: "disporty-competition-platform",
    index: "03",
    title: "Competition Platform",
    client: "Disporty",
    role: "Frontend Developer (Contract)",
    period: "Feb 2024 — May 2024",
    year: "2024",
    summary:
      "A game-management platform for EA FC Pro Clubs organisers, built with an international team on a three-month contract.",
    spec: "Next.js + TypeScript · SSR · sub-1.5s page loads · international team",
    stack: ["Next.js", "TypeScript", "React", "REST APIs", "Tailwind CSS"],
    metrics: [
      { value: "<1.5s", label: "page load time after the SSR work" },
      { value: "3 months", label: "contract — concept to shipped platform" },
      { value: "EA FC", label: "Pro Clubs competitions, the platform's niche" },
    ],
    problem: [
      "Competition organisers were running leagues on WhatsApp, Discord and spreadsheets: fixtures tracked by hand, standings argued over in chat, results entered twice. The product had to make the standings the source of truth and keep them live during a tournament, for organisers and players who are not technical.",
      "It also had to feel fast. This audience is used to game clients — a dashboard that takes four seconds to paint reads as broken.",
    ],
    built: [
      {
        lead: "Competition and league surfaces",
        body: "Frontend for competitions, hierarchies, teams and rankings: dense tables and standing views that stay readable on a phone, because that is where organisers actually check them.",
      },
      {
        lead: "Moved rendering to the server",
        body: "Converted heavy client-side screens to server rendering, cutting the amount of work the browser had to do on first paint and pushing load time under 1.5 seconds.",
      },
      {
        lead: "API integration across a shared codebase",
        body: "Consumed and shaped REST endpoints with the backend team, keeping clean, typed boundaries between the data layer and the interface in a codebase several engineers touched at once.",
      },
    ],
    outcome: [
      "Page load time under 1.5 seconds — good enough to stop feeling like a web app.",
      "In use in production with an international team and an organising audience in multiple countries.",
    ],
    image: "/work/disporty.png",
    imageAlt: "Disporty competition platform homepage",
    live: { label: "disporty.com", href: "https://www.disporty.com" },
  },
  {
    slug: "archware-client-platforms",
    index: "04",
    title: "Client Platforms",
    client: "Archware Technologies",
    role: "Frontend Engineer → Software Developer",
    period: "Jan 2021 — Present",
    year: "2021",
    summary:
      "Five-plus production platforms for education, property and healthcare clients — plus the marketing sites that sell them.",
    spec: "5+ platforms · API integration · 30% faster responses · mentored junior developers",
    stack: ["React", "Next.js", "Laravel", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap"],
    metrics: [
      { value: "5+", label: "platforms shipped to production" },
      { value: "30%", label: "faster backend response times after API rework" },
      { value: "3", label: "sectors — education, property, healthcare" },
    ],
    problem: [
      "Archware builds products for clients who each need their own domain, workflow and language — a course marketplace, property management, a clinic, an agri-trade platform. Each one arrived as a blank page with a deadline, and each one had to sit on a shared backend and design language without becoming the same site five times.",
      "The technical debt was real too: REST calls made from wherever was convenient, slower than the products deserved, and a codebase other developers had to be able to join.",
    ],
    built: [
      {
        lead: "Archware Institute — course marketplace",
        body: "A platform where instructors upload and sell courses: catalogue, search, checkout and the instructor-side interface, built on React and Laravel.",
      },
      {
        lead: "Archware Facility Lease — property management",
        body: "Connecting landlords, tenants and artisans around rent, maintenance and communication — the workflow that had been phone calls and paper agreements.",
      },
      {
        lead: "API and performance work",
        body: "Reworked and integrated RESTful APIs and moved client-side rendering to the server where it paid off, reducing backend response time by 30%.",
      },
      {
        lead: "Working with people, not just tickets",
        body: "Partnered with UX/UI designers and cross-functional teams, and mentored junior developers on Agile workflow and code review.",
      },
    ],
    outcome: [
      "Delivered 5+ production platforms across three sectors, all client-facing.",
      "Backend response times improved by 30% after the API integration work.",
      "Junior developers onboarded through code review and Agile practice rather than learn-by-fire.",
    ],
    image: "/work/archware-platforms.png",
    imageAlt: "Archware Technologies product site",
    live: { label: "archwaretechgroup.com", href: "https://www.archwaretechgroup.com" },
    alsoBuilt: [
      { name: "Archware Tech Institute", note: "Course marketplace (React + Laravel)." },
      { name: "Archware E-Agromart", note: "Agricultural trading platform (React + Laravel)." },
      { name: "Foremost Eye Clinic", note: "Healthcare service site with Laravel APIs." },
      { name: "Youhi Media", note: "Studio site — HTML, CSS, JavaScript, Bootstrap." },
    ],
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
