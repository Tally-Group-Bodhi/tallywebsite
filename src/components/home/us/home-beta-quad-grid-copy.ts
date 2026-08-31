/** English copy for the US homepage quad grid. */

export const US_HOME_HEADLINE =
  "The AI-powered platform for retail energy providers";

export const US_HOME_SUBHEAD =
  "Configure modules to match your business requirements";

export const US_HOME_QUADRANTS = [
  {
    id: "order-to-cash",
    title: "Order to Cash",
    subItems: [
      "Billing",
      "Meter-to-Bill Operations",
      "Credit & Collections",
      "Workflow Automation",
    ],
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    subItems: [
      "CSR AI Companion",
      "Unified Agent Desktop",
      "Self-Service Customer Portal",
      "Customer Experience Optimization",
    ],
  },
  {
    id: "transition-products",
    title: "Energy Transition Solutions",
    subItems: [
      "Demand Response",
      "Solar, Electric Vehicles & Battery Storage (BESS)",
      "Distributed Energy Resources (DER)",
      "ESG & Carbon Reporting",
    ],
  },
  {
    id: "sales-management",
    title: "Sales Management",
    subItems: [
      "Rate Plans",
      "Sales Portal",
      "Auto-Enrollment",
      "Customer Enrollment",
    ],
  },
] as const;
