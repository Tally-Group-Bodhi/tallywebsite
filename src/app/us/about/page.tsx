import type { Metadata } from "next";
import Image from "next/image";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { USCtaSection } from "@/components/us/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tally is a world-leading cloud-native software platform and ecosystem enabling decarbonisation, digitisation and decentralisation for energy retailers globally.",
};

const skippingStoneLinkClassName =
  "text-navy font-medium hover:text-turquoise transition-colors underline decoration-stroke1 underline-offset-2";

const usHistoryLead = (
  <>
    Tally Group formed in 2021, following the merger of leading cloud-based billing
    solutions provider Agility CIS and fast-growing energy retail SaaS software
    provider Tally. The Tally Group includes Znalytics (US/Japan) and Webtools Energy
    (Australia and New Zealand), which were both acquired by Agility CIS in 2020. In
    May 2022, we rebranded globally as Tally Group. In 2026, Tally Group acquired{" "}
    <a
      href="https://skippingstone.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={skippingStoneLinkClassName}
    >
      Skipping Stone
    </a>
    , an energy consulting firm, marking a key step in global growth. Combining
    Tally&apos;s technology with Skipping Stone&apos;s market expertise strengthens
    end-to-end solutions. This expands our reach in the U.S. and Japan, positioning
    us to help clients navigate change and unlock value in evolving energy markets.
  </>
);

const storyCards = [
  {
    icon: "rocket_launch",
    title: "Revolutionising Utility Technology",
    description:
      "We put our energy into building industry-changing utility technology, transforming how people power their homes and businesses by reinventing how utilities operate.",
  },
  {
    icon: "cloud",
    title: "Providers of Cloud-Native, AI-powered SaaS",
    description:
      "Built for a cloud era, our AI-powered solutions are designed to reduce complexity, accelerate change and deliver smarter operations, providing the backbone architecture to enable rapid innovation in a changing market.",
  },
  {
    icon: "eco",
    title: "Innovation in Decarbonisation",
    description:
      "We help utilities unlock new revenue opportunities and keep pace with changing landscapes amidst climate change, grid transformation and new technologies, moving beyond legacy constraints.",
  },
  {
    icon: "group",
    title: "Built for People and Performance",
    description:
      "Our solutions empower consumers and operators alike, driving operational efficiency through automated processes and intuitive self-service tooling, and equipping operators with real-time insights to resolve issues faster.",
  },
  {
    icon: "handshake",
    title: "Uniting Energy Solutions Worldwide",
    description:
      "Formed in 2021, Tally Group brings together the strengths and expertise of multiple leading companies under one vision to deliver end-to-end utility technology and services across six diverse markets.",
  },
  {
    icon: "language",
    title: "Global Reach, Local Focus",
    description:
      "With origins in one of the world\u2019s most complex energy markets, we combine global capability with deep local knowledge to meet unique regulatory, market and customer requirements across every region.",
  },
];

const aboutStats = [
  { num: "50", unit: "+", label: "Clients globally" },
  { num: "300", unit: "+", label: "Global staff" },
  { num: "5", unit: "M+", label: "Meter points" },
  { num: "$15", unit: "B+", label: "Annual billing" },
];

const clientCommitments = [
  { icon: "tune", text: "Robust and configurable solutions" },
  { icon: "auto_awesome", text: "Leading-edge technology and AI that matters" },
  { icon: "schedule", text: "On time, on budget implementations" },
  { icon: "support_agent", text: "Responsive, proactive, high-impact support" },
  { icon: "alt_route", text: "Client-driven development pipelines" },
  { icon: "handshake", text: "Enduring partnerships built on shared success" },
];

const customerCommitments = [
  { icon: "stars", text: "An exceptional end-to-end customer experience" },
  { icon: "smart_toy", text: "Personalized, AI-powered self-service automation" },
  { icon: "rocket_launch", text: "Access to the latest in future-ready technology" },
  { icon: "receipt_long", text: "Accurate billing with payment options" },
  { icon: "psychology", text: "Knowledge-enabled customer service reps" },
  { icon: "chat", text: "Clear and useful communications" },
];

const peopleCommitments = [
  { icon: "bolt", text: "Work at the forefront of utility tech" },
  { icon: "public", text: "Global focus on real-world problems" },
  { icon: "smart_toy", text: "Access to cutting-edge AI tools and training" },
  { icon: "menu_book", text: "Tailored learning and proven career pathways" },
  { icon: "work", text: "Flexible, hybrid working environments" },
  { icon: "payments", text: "Competitive compensation and benefits" },
];

const leaders = [
  {
    name: "Andrew Duncan",
    role: "Chief Executive Officer",
    bio: "Andrew is the Founder and Chairman of Tally and was appointed CEO in 2022 following the merger that formed Tally Group. With more than 30 years of experience in the Australian energy market, he has played a key role in driving technology-led transformation across the retail energy sector. Andrew founded Serviceworks and led its successful sale to Computershare in 2011, establishing the first BPO service provider for Australia\u2019s deregulated energy market. A recognized founder and investor, he brings deep industry expertise and a practical, execution-focused leadership style, with a strong emphasis on simplifying operations and improving customer outcomes.",
    photoSrc: "/corporate/Andrew.jpg",
  },
  {
    name: "Travis Lehman",
    role: "Chief Operating Officer",
    bio: "Travis joined Agility CIS in 2019 as Transformation Director, leading the Value Creation Program including M&A through a pivotal period of growth and integration. With experience spanning strategy, transactions, and execution, he specializes in scaling technology businesses in complex global markets. Prior to Tally, Travis spent about a decade with Deloitte Consulting in the M&A practice in San Francisco and holds an MBA from Stanford Graduate School of Business. He brings a calm, solutions-focused approach, translating strategy into disciplined execution to drive sustainable growth.",
    photoSrc: "/corporate/Travis Lehman.jpg",
  },
  {
    name: "Peter Weigand",
    role: "Chief Growth Officer",
    bio: "As Tally\u2019s Chief Growth Officer, Peter leads Tally\u2019s expansion across the U.S. and Japan markets. He has been instrumental in growing energy companies globally for many years, serving as CEO of four energy companies prior to joining Tally, and having held board roles across a number of energy startups. In addition to his role as CGO, he is also CEO of Skipping Stone, Tally\u2019s wholly owned energy consulting business. He focuses on accelerating Tally\u2019s global growth by developing relationships that leverage both consulting services and Tally\u2019s market leading solutions.",
    photoSrc: "/us/Peter Weigand.jpg",
  },
  {
    name: "Eric Yilmaz",
    role: "Chief Technology Officer",
    bio: "Eric joined Tally in 2023, bringing more than 20 years of experience across technology strategy, digital platforms, infrastructure, operations, and product development. Prior to joining Tally, he served as CTO at Sorted and held senior innovation and technology leadership roles at EY, working at the intersection of emerging technologies and enterprise-scale transformation. He leads Tally\u2019s global technology organization, focusing on modern engineering, cloud architecture, and applied AI to drive quality, security, and speed to value. Eric is focused on building high-performing teams and scalable, future-ready platforms.",
    photoSrc: "/corporate/Eric Yilmaz.jpg",
  },
  {
    name: "Raine Figaro",
    role: "Delivery Lead",
    bio: "Raine joined Tally as U.S. Delivery Lead in 2023, bringing more than 20 years\u2019 experience across global program, project and portfolio delivery. She has led large-scale technology and transformation initiatives at organisations including Amazon Web Services, Capital One, Microsoft and Verizon, with a strong focus on execution, stakeholder alignment and customer outcomes. Raine is known for building high-performing teams and fostering a collaborative, growth-focused culture, with a leadership style grounded in trust, mentorship and delivery excellence.",
    photoSrc: "/us/Raine Figaro.jpg",
  },
  {
    name: "Chris Bates",
    role: "Product Manager | Product & Client",
    bio: "Chris joined Tally in 2012 and brings more than 14 years\u2019 experience designing enterprise-scale billing and regulatory solutions for the energy sector. He has held roles across engineering and architecture, and now helps shape product direction and delivery for Tally\u2019s U.S. platforms. Chris combines deep technical expertise with a practical understanding of client needs, driving solutions that are robust, scalable and aligned to complex market requirements.",
    photoSrc: "/us/Chris Bates.jpg",
  },
  {
    name: "TBD",
    role: "Sales Manager",
    bio: "Bio coming soon.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            Intelligent utilitech<br />solutions.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            Tally Group designs and delivers cloud-native, AI-powered utility software that cuts cost, captures opportunity, and empowers your people.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-[88px] py-[96px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Who we are
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Proven transformation partners for leading utilities.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {storyCards.map((card) => (
              <div key={card.title} className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-fg1">{card.title}</h3>
                <p className="text-sm leading-[1.55] text-fg2 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <HistoryTimeline
        showDivider={false}
        compact
        eyebrow="History"
        heading="A journey of innovation and growth."
        lead={usHistoryLead}
        entries={[
          { year: "2018", title: "Tally founded" },
          { year: "2020", title: "Global expansion" },
          { year: "2021", title: "Tally Group is formed" },
          { year: "2023", title: "Strategic investment" },
          { year: "2024", title: "Alinta CORE platform" },
          { year: "2026", title: "Skipping Stone acquisition" },
        ]}
      />

      {/* Breadth of experience */}
      <section className="py-[96px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[820px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Unparalleled breadth of experience
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Proven expertise in complex utility ecosystems.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[56px]">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg2 rounded-2xl px-[28px] py-[40px] lg:py-[56px]"
              >
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none tabular-nums text-navy">
                  {stat.num}
                  <span className="text-turquoise">{stat.unit}</span>
                </div>
                <p className="mt-[20px] text-[14px] leading-[1.5] text-fg2 m-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-[88px] py-[96px]" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              U.S. Leadership
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Leaders shaping growth and delivery of Tally+ across the United States
            </h2>
            <p className="mt-[16px] text-sm leading-[1.55] text-fg2 m-0 max-w-[60ch]">
              Bringing together deep industry expertise and a shared commitment to growth, innovation, and execution at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {leaders.map((leader) => (
              <LeaderCard
                key={`${leader.name}-${leader.role}`}
                leader={leader}
                photoSrc={leader.photoSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section id="mission-values" className="scroll-mt-[88px] py-[96px]" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[820px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Mission & Values
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Committed to our clients, the customers they serve, and our employees.
            </h2>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-fg2 m-0 max-w-[68ch]">
              Our values guide every decision we make, shaping how we deliver results, build trust, and create opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <CommitmentColumn title="Our commitment to clients" items={clientCommitments} />
            <CommitmentColumn title={"Our commitment to clients\u2019 customers"} items={customerCommitments} />
            <CommitmentColumn title="Our commitment to our people" items={peopleCommitments} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <USCtaSection
        title="Find out how Tally Group can help your business."
        description="Book a demo, ask a question, or just say hello."
        primaryLabel="Request a demo"
      />
    </>
  );
}

type LeaderProfile = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

function LeaderCard({
  leader,
  photoSrc,
}: {
  leader: LeaderProfile;
  photoSrc?: string;
}) {
  const photo = photoSrc ? (
    <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
      <Image
        src={photoSrc}
        alt={`Portrait of ${leader.name}`}
        width={88}
        height={88}
        className="w-full h-full object-cover object-[center_top]"
        loading="lazy"
      />
    </div>
  ) : (
    <div
      className="w-[88px] h-[88px] rounded-full shrink-0 border border-stroke1 bg-bg2"
      aria-hidden
    />
  );

  return (
    <article className="bg-white border border-stroke1 rounded-xl p-[24px] flex flex-col gap-[16px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-[14px]">
        {photo}
        <div>
          <h3 className="m-0 mb-[2px] text-base font-semibold text-navy tracking-tight leading-tight">
            {leader.name}
          </h3>
          <p className="m-0 text-sm text-fg2">{leader.role}</p>
        </div>
      </div>
      <p className="m-0 text-sm leading-[1.55] text-fg2">{leader.bio}</p>
    </article>
  );
}

function CommitmentColumn({
  title,
  items,
}: {
  title: string;
  items: { icon: string; text: string }[];
}) {
  return (
    <div className="bg-bg2 rounded-xl p-[28px]">
      <h3 className="text-lg font-semibold text-navy mb-[24px]">{title}</h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((item) => (
          <li key={item.text} className="flex items-center gap-[12px]">
            <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
            </div>
            <span className="text-sm text-fg2 leading-[1.4]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
