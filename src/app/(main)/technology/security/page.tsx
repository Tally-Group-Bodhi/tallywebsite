import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import {
  TechBulletList,
  TechCardGrid,
  TechHero,
  TechIntroBand,
  TechSection,
} from "@/components/us/tech/tech-page";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Hosting and security span the Tally+ topology—protecting metering, billing, market, and customer data while supporting compliance and operational resilience for regulated retail.",
};

const complianceItems = [
  {
    strong: "Market & product compliance",
    text: "support for complex products and pass-through constructs described in Tally capability materials (indexed and time-of-use structures, pass-through charges, new energy scenarios, and related invoicing).",
  },
  {
    strong: "Operational controls",
    text: "separation between roles that configure pricing, approve campaigns, and operate settlement-critical batch processes—aligned to enterprise IAM when integrated with your IdP.",
  },
  {
    strong: "Evidence for buyers",
    text: "framework mappings, control narratives, and third-party attestations are shared under NDA during procurement; ask your Tally contact for the current matrix for your region.",
  },
];

const dataItems = [
  {
    strong: "Classification & handling",
    text: "metering, billing, payment, and customer identity data are handled with least-privilege access, encryption in transit, and encryption at rest appropriate to cloud deployment patterns.",
  },
  {
    strong: "Retention & auditability",
    text: "configurable retention aligned to regulatory and commercial needs; access logging for privileged operations.",
  },
  {
    strong: "Incident response",
    text: "coordinated customer notification and remediation playbooks consistent with enterprise vendor expectations (details provided during onboarding).",
  },
];

const certCards = [
  {
    icon: "verified",
    title: "Security & privacy attestations",
    body: "Upon request: summaries of ISO management system certifications (where held for the services in scope) and mapped controls—with validity dates and registration boundaries.",
  },
  {
    icon: "fact_check",
    title: "Independent audits",
    body: "SOC-style or equivalent third-party examination reports, where available, for the hosting and service boundary relevant to your deployment.",
  },
  {
    icon: "hub",
    title: "Architecture linkage",
    body: (
      <>
        The <strong>Hosting &amp; security</strong> layer in the{" "}
        <MarketingLink
          href="/technology/architecture"
          className="text-navy underline underline-offset-2 hover:text-turquoise"
        >
          Tally+ topology
        </MarketingLink>{" "}
        sits alongside operational intelligence—reflecting defence-in-depth across channels,
        integrations, and batch operations.
      </>
    ),
  },
];

export default function USSecurityPage() {
  return (
    <>
      <TechHero
        eyebrow="Technology / Security"
        title="Security"
        lede="Hosting and security span the Tally+ topology—protecting metering, billing, market, and customer data while supporting compliance and operational resilience for regulated retail."
      />

      <TechIntroBand
        eyebrow="Trust"
        heading="Confidence to deploy"
        paragraphs={[
          <>
            The Tally+ program emphasizes <strong>compliance &amp; regulatory</strong> capability
            together with <strong>operational excellence</strong>—lifting automation (including
            AI/ML) to reduce cost-to-serve while preserving the controls retailers need for procurement
            and risk reviews.
          </>,
        ]}
        pills={["Compliance & regulatory fit", "Operational resilience", "Data integrity"]}
      />

      <TechSection
        id="sec-compliance-heading"
        eyebrow="Compliance"
        heading="Compliance & regulatory alignment"
        lede="Retail platforms must stay aligned with market rules, tariff constructs, and correspondence obligations as jurisdictions evolve. Tally+ is positioned to maintain demonstrable billing and product-development capabilities alongside governance suited to energy retail—including deployments integrated with U.S. and global energy markets where applicable."
      >
        <TechBulletList items={complianceItems} />
      </TechSection>

      <TechSection
        id="sec-data-heading"
        eyebrow="Data protection"
        heading="Data protection & integrity"
        altBg
        lede="Automated Data Management (ADM) automates and validates transaction data—usage, billing, and metering—reducing manual workload through smart normalization and reconciliation so downstream billing and compliance workflows rest on accurate inputs."
      >
        <TechBulletList items={dataItems} />
      </TechSection>

      <TechSection
        id="sec-cert-heading"
        eyebrow="Certifications & audit"
        heading="Assurance & certifications"
        lede={
          <p className="m-0">
            U.S. and global procurement teams typically request named certifications (for
            example ISO/IEC 27001), independent audit reports, and renewal cadence.{" "}
            <strong>Official artefacts are supplied under NDA</strong> with scope statements
            matched to the services you consume.
          </p>
        }
      >
        <TechCardGrid items={certCards} columns={3} />
      </TechSection>
    </>
  );
}
