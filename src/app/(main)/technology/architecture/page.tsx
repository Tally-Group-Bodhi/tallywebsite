import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechBulletList,
  TechHero,
  TechIntegGrid,
  TechPrincipleGrid,
  TechSection,
  TechSubheading,
} from "@/components/us/tech/tech-page";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How we design the Tally+ platform: architecture principles and a reference target architecture for modular services, integrations, and channels.",
};

const wellArchitected = {
  icon: "architecture",
  title: "Well-architected",
  items: [
    "As a foundation for all design adhere to well-architected principles (reliability, security, cost optimization, operational excellence, performance efficiency).",
  ],
};

const modular = {
  icon: "view_module",
  title: "Modular",
  items: [
    "Build toward modular components.",
    "Low coupling and strong cohesion results in stable platforms.",
    "Reusable within the platform, and potentially across platforms.",
    "Increase flexibility within a module.",
    "Increase flexibility between modules.",
  ],
};

const integrationEnabled = {
  icon: "integration_instructions",
  title: "Integration enabled",
  items: [
    "Follow industry standard enterprise integration patterns for both internal integrations between modules and external integrations.",
    "Enable functionality through APIs for internal and potentially external use.",
    "Use events to notify components of changes and potentially expose them externally through webhooks.",
  ],
};

const compliant = {
  icon: "verified_user",
  title: "Compliant",
  items: ["Any solution must be compliant for the domain in which it operates."],
};

const consolidated = {
  icon: "group_work",
  title: "Consolidated",
  items: [
    "Consolidate common functionality in modules.",
    "Reduce compliance risks.",
  ],
};

const incrementalEvolution = {
  icon: "trending_up",
  title: "Incremental evolution",
  items: [
    "Prioritise incremental evolution to big-bang cutovers.",
    "Apply standard migration patterns when enhancing software (for example strangler fig, branch by abstraction, and parallel run).",
    "Deliver value early.",
    "Minimise risk.",
  ],
};

const valueDrivenPriorities = {
  icon: "stars",
  title: "Value-driven priorities",
  items: [
    "Key-value streams (for example billing, payments, market).",
    "Areas of competitive advantage.",
    "Innovation and growth.",
    "Compliance.",
    "Security.",
  ],
};

const principleColumns: [
  typeof wellArchitected[],
  typeof wellArchitected[],
] = [
  [wellArchitected, modular, integrationEnabled],
  [compliant, consolidated, incrementalEvolution, valueDrivenPriorities],
];

const nativeIntegrations = [
  { title: "Market", body: "ERCOT, PJM, NYISO, SMT" },
  { title: "Payments", body: "Authorize .Net" },
  {
    title: "Mail, comms and notifications",
    body: "Twilio, SendGrid, MsgMe",
  },
  {
    title: "Credit Check",
    body: "Credit Check, Equifax, TransUnion",
  },
];

export default function USArchitecturePage() {
  return (
    <>
      <TechHero
        eyebrow="Technology / Architecture"
        title="Tally+ ecosystem architecture"
        lede="How we design the Tally+ platform: architecture principles and a reference target architecture for modular services, integrations, and channels."
      />

      <TechSection
        id="principles-heading"
        eyebrow="Architecture principles"
        heading="Tally+ ecosystem — architecture principles"
      >
        <TechPrincipleGrid columns={principleColumns} />
      </TechSection>

      <TechSection
        id="target-heading"
        eyebrow="Target architecture"
        heading="Tally+ ecosystem — target architecture"
        altBg
        lede={
          <p className="m-0">
            Tally+ is modular-by-design and can be fully integrated with a retailer&rsquo;s
            enterprise ecosystem, providing integrations for strategic platforms.
          </p>
        }
      >
        <figure
          aria-label="Reference architecture diagram"
          className="max-w-[1000px] rounded-xl overflow-hidden border border-stroke1 bg-navy aspect-[16/9] grid place-items-center text-white/60 text-sm text-center px-8"
        >
          <span>
            Tally+ EOS reference architecture diagram: retailers, portals, core operating functions,
            ISO / RTO market interfaces, and payment agency flows.
          </span>
        </figure>
        <p className="mt-3 max-w-[60ch] text-[13px] text-fg2/70 leading-[1.6]">
          Reference diagram — illustrative partners and systems; regional deployments vary.
        </p>

        <TechSubheading>Inside the Tally+ core platform</TechSubheading>
        <TechBodyParagraph>
          Unified access and experience layers sit above the modular service stack; integration
          and events support connectivity.
        </TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            items={[
              {
                strong: "Unauthenticated",
                text: "website, social, sales portal.",
              },
              {
                strong: "Authenticated",
                text: "customer portal, customer app, business portal, agency portal.",
              },
              {
                text: "Integration (generic and custom) and events for module-to-module and enterprise connectivity.",
              },
            ]}
          />
        </div>

        <TechSubheading>Enterprise context (reference)</TechSubheading>
        <TechBodyParagraph>Typical client-side system integrations:</TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            items={[
              { text: "Enterprise data platform" },
              { text: "Marketing; ERP for people and finance" },
              { text: "Customer’s in-place supporting systems" },
            ]}
          />
        </div>

        <TechSubheading>Native integrations (reference categories)</TechSubheading>
        <TechBodyParagraph>
          Examples shown on the target diagram — swap for your market and compliance footprint.
        </TechBodyParagraph>
        <div className="mt-[24px]">
          <TechIntegGrid items={nativeIntegrations} columns={4} />
        </div>
      </TechSection>
    </>
  );
}
