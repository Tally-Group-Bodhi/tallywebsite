export type OverviewModule = {
  id: string;
  title: string;
  description: string;
  items: string[];
  stats?: Array<{ value: string; label: string }>;
  tint: string;
  border: string;
};

export const US_OVERVIEW_MODULES: OverviewModule[] = [
  {
    id: "order-to-cash",
    title: "Order to Cash",
    description:
      "Run the full order-to-cash lifecycle on one system—accurate bills, tighter cash flow, and exception handling that keeps operations moving.",
    items: [
      "Billing",
      "Meter-to-Bill Operations",
      "Credit & Collections",
      "Workflow Automation",
    ],
    stats: [
      { value: "99%", label: "Bills auto-generated and released" },
      { value: "0%", label: "Bill-run failures" },
      { value: "120K", label: "Bills generated per hour" },
    ],
    tint: "rgba(185, 188, 203, 0.55)",
    border: "#B9BCCB",
  },
  {
    id: "sales-management",
    title: "Sales Management",
    description:
      "Stand up new offers quickly and move from lead to enrolled customer with less friction across channels.",
    items: [
      "Rate Plans",
      "Sales Portal",
      "Auto-Enrollment",
      "Customer Enrollment",
    ],
    tint: "rgba(188, 218, 251, 0.75)",
    border: "#7EB8F0",
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    description:
      "Give agents and customers one connected experience—AI-assisted service, fewer handoffs, and self-service that actually resolves issues.",
    items: [
      "CSR AI Companion",
      "Unified Agent Desktop",
      "Self-Service Customer Portal",
      "Customer Experience Optimization",
    ],
    tint: "rgba(215, 200, 244, 0.75)",
    border: "#C4A8E8",
  },
  {
    id: "energy-transition",
    title: "Energy Transition Solutions",
    description:
      "Launch net-zero-ready products—demand response, distributed energy, and ESG reporting—on the same platform as your core retail stack.",
    items: [
      "Demand Response",
      "Solar, Electric Vehicles & Battery Storage (BESS)",
      "Distributed Energy Resources (DER)",
      "ESG & Carbon Reporting",
    ],
    tint: "rgba(174, 215, 204, 0.75)",
    border: "#7DC4A8",
  },
];

export const US_OVERVIEW_MARKET_HIGHLIGHTS = [
  {
    icon: "bolt",
    title: "Pricing Agility",
    body: "Launch and revise competitive offers—including fixed, variable, and structured products—in hours instead of days, so you can move with the market without waiting on IT.",
  },
  {
    icon: "eco",
    title: "DER-Ready",
    body: "Develop offerings such as PPAs, VPPAs, EVs, demand response, batteries, and onsite generation—alone or combined.",
  },
  {
    icon: "smart_toy",
    title: "Embedded AI",
    body: "Straight-through processing and streamlining help you scale faster without adding more staff.",
  },
];
