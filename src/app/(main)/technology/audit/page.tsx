import type { Metadata } from "next";
import {
  TechBulletList,
  TechHero,
  TechIntroBand,
  TechSection,
} from "@/components/us/tech/tech-page";

export const metadata: Metadata = {
  title: "Audit",
  description:
    "Revenue assurance, reconciled meter and billing data, and operational intelligence—giving internal audit and external reviewers traceability across the meter-to-cash lifecycle.",
};

const monitoringItems = [
  {
    strong: "Interval & register lineage",
    text: "traceability from raw reads through validation rules to billing determinants.",
  },
  {
    strong: "Batch & real-time signals",
    text: "monitoring hooks suitable for SIEM or ITSM forwarding where enterprise standards require them.",
  },
];

const governanceItems = [
  {
    strong: "Workflow & exceptions",
    text: "tailored exception and workflow management for operational teams handling complex retail scenarios.",
  },
  {
    strong: "Change management",
    text: "release and migration approaches favor incremental evolution (strangler fig, branch by abstraction, parallel run) to reduce audit risk from big-bang cutovers.",
  },
];

export default function USAuditPage() {
  return (
    <>
      <TechHero
        eyebrow="Technology / Audit"
        title="Audit"
        lede="Revenue assurance, reconciled meter and billing data, and operational intelligence—giving internal audit and external reviewers traceability across the meter-to-cash lifecycle."
      />

      <TechIntroBand
        eyebrow="Evidence & oversight"
        heading="Evidence & oversight"
        paragraphs={[
          "The Tally ecosystem explicitly spans revenue assurance alongside billing, MDM, and market workflows—so anomalies, adjustments, and exceptions can be investigated with consistent lineage from usage through invoice and settlement. Control, exception and audit reports are available for self-service.",
        ]}
        keywords={["Revenue assurance", "Data validation", "Operational intelligence"]}
      />

      <TechSection
        id="audit-monitor-heading"
        eyebrow="Monitoring & reconciliation"
        heading="Monitoring & reconciliation"
        lede="ADM (Automated Data Management) automates and validates transaction data—usage, billing, and metering—with smart normalization and reconciliation to improve billing accuracy and reduce manual rework. Operational dashboards and alerts surface exceptions for operational triage (routing depends on your deployment and integrations)."
      >
        <TechBulletList items={monitoringItems} />
      </TechSection>

      <TechSection
        id="audit-gov-heading"
        eyebrow="Governance"
        heading="Governance"
        altBg
        lede="Segregation of duties is preserved through role-based access (including highly segmented models for portals), maker-checker patterns for sensitive configuration, and controlled promotion of price/product changes—consistent with retail operational risk expectations."
      >
        <TechBulletList items={governanceItems} />
      </TechSection>
    </>
  );
}
