import type { Metadata } from "next";
import {
  TechBulletList,
  TechCTARow,
  TechCardGrid,
  TechHero,
  TechIntroBand,
  TechSection,
} from "@/components/us/tech/tech-page";

export const metadata: Metadata = {
  title: "API Library",
  description:
    "APIs, events, and webhooks that integrate Tally+ modules with your enterprise stack—consistent with the integration-enabled architecture used across Retail OS, MDM, billing, market gateway, digital channels, and the broader service library.",
};

const docItems = [
  {
    strong: "Authentication",
    text: "OAuth2 / bearer tokens aligned with your IdP federation; service-to-service credentials for batch and integration hosts.",
  },
  {
    strong: "Error Model",
    text: "HTTP status codes with machine-readable problem details for validation failures, conflicts, and idempotency replays.",
  },
  {
    strong: "Limits",
    text: "Documented rate limits and burst behavior; bulk endpoints favor asynchronous completion where payloads are large (for example, MDM interval backfills).",
  },
];

const integrationCards = [
  {
    icon: "broadcast_on_personal",
    title: "Market & gateway events",
    body: "Subscribe to market message outcomes or webhook callbacks when gateway workflows complete—supporting reconciliation with ISOs/RTOs, OCCTO-aligned flows, AEMO, or other operators depending on region.",
  },
  {
    icon: "person_add",
    title: "Idempotent customer & enrollment POST",
    body: "Create or update customer and contract entities with idempotency keys so acquisition portals and CRM handoffs can retry safely during switching journeys.",
  },
  {
    icon: "database",
    title: "Bulk metering & billing extracts",
    body: "Paginated or file-based export patterns for interval reads, billing determinants, and invoice extracts into your data platform or ERP staging tables.",
  },
];

export default function USApiLibraryPage() {
  return (
    <>
      <TechHero
        eyebrow="Technology / API Library"
        title="API Library"
        lede="APIs, events, and webhooks that integrate Tally+ modules with your enterprise stack—consistent with the integration-enabled architecture used across Retail OS, MDM, billing, market gateway, digital channels, and the broader service library."
      />

      <TechIntroBand
        eyebrow="Integration platform"
        heading="Integration-Enabled Platform"
        paragraphs={[
          <>
            Tally+ follows enterprise integration patterns: <strong>REST APIs</strong> for
            synchronous operations, <strong>events</strong> for intra-platform notifications, and{" "}
            <strong>webhooks</strong> where external systems must react to lifecycle changes—
            supporting the &ldquo;highly scalable and easy-to-integrate&rdquo; posture described
            for retail deployments.
          </>,
        ]}
        pills={["REST APIs", "Events", "Webhooks"]}
      />

      <TechSection
        id="api-docs-heading"
        eyebrow="Documentation"
        heading="Documentation & lifecycle"
        lede="Product references are published in OpenAPI-compatible form where interfaces are stable enough for external consumption; internal-only modules may ship partner-specific bundles under NDA. Versioning, deprecation windows, and changelog entries follow semantic conventions so integrators can plan upgrades alongside Tally release schedules."
      >
        <TechBulletList items={docItems} />
      </TechSection>

      <TechSection
        id="api-examples-heading"
        eyebrow="Integration patterns"
        heading="Integration patterns (representative)"
        altBg
        lede="Examples mirror common retailer integrations—substitute endpoints and payloads from your tenant documentation."
      >
        <TechCardGrid items={integrationCards} columns={3} surface="outline" />
        <TechCTARow
          buttons={[
            { label: "Request integration materials", href: "/contact", variant: "primary" },
            { label: "Contact Tally+ US", href: "/contact", variant: "secondary" },
          ]}
        />
      </TechSection>
    </>
  );
}
