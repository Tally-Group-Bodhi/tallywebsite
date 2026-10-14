import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tally Group collects, uses, shares, and protects personal information when you visit our website or communicate with us.",
  robots: {
    index: false,
    follow: false,
  },
};

const useItems = [
  "Respond to inquiries and requests;",
  "Provide information about our products and services;",
  "Manage and develop business and customer relationships;",
  "Conduct sales and business development activities;",
  "Send newsletters and other marketing communications;",
  "Administer events, webinars, surveys, promotions, and other activities;",
  "Provide requested resources and information;",
  "Improve our website, products, services, and communications;",
  "Maintain the security of our website and systems; and",
  "Comply with legal and regulatory obligations.",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[120px]">
      <h2 className="m-0 text-[22px] lg:text-[28px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
        {title}
      </h2>
      <div className="mt-[16px] space-y-[16px] text-[16px] lg:text-[17px] leading-[1.75] text-fg1">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <section className="pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]">
          <div className="max-w-[760px] mx-auto px-8">
            <h1 className="m-0 text-[40px] lg:text-[56px] font-light leading-[1.05] tracking-[-0.025em] text-navy">
              Privacy Policy
            </h1>
            <p className="mt-[16px] m-0 text-sm font-semibold text-fg2">
              Effective Date:{" "}
              <time dateTime="2026-10-08">October 8, 2026</time>
            </p>
          </div>
        </section>
      </div>

      <article className="bg-white pb-[96px] lg:pb-[120px]">
        <div className="max-w-[760px] mx-auto px-8 flex flex-col gap-[40px] lg:gap-[48px]">
          <p className="m-0 text-[16px] lg:text-[17px] leading-[1.75] text-fg1">
            Tally Group (&ldquo;Tally Group,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            Privacy Policy explains how we collect, use, share, and protect
            personal information when you visit www.tally-plus.com or communicate
            with us.
          </p>

          <Section id="information-we-collect" title="Information We Collect">
            <p className="m-0">
              We may collect personal information you provide to us when you
              submit a contact form or inquiry, request information, register for
              or attend an event or webinar, subscribe to communications,
              participate in a survey or promotion, download a resource,
              communicate with us by email, telephone, or SMS, or otherwise
              interact with us.
            </p>
            <p className="m-0">
              Depending on how you interact with us, this may include your name,
              company or organization, job title, business email address,
              telephone number, business address, communication preferences,
              information about your professional relationship with us, and other
              information you choose to provide.
            </p>
            <p className="m-0">
              We may also automatically collect certain technical information
              when you use our website, such as your IP address, browser and
              device information, pages viewed, referring website, and
              information about how you use our website.
            </p>
          </Section>

          <Section id="how-we-use-information" title="How We Use Information">
            <p className="m-0">We may use personal information to:</p>
            <ul className="m-0 pl-[22px] list-disc space-y-[8px]">
              {useItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="m-0">
              Where required by applicable law, we will obtain consent for
              particular uses of personal information. You may opt out of
              marketing communications by following the instructions provided in
              the communication or by contacting us.
            </p>
          </Section>

          <Section
            id="sharing-of-personal-information"
            title="Sharing of Personal Information"
          >
            <p className="m-0">
              Tally Group is part of a global corporate group. Our parent company
              is located in Australia, and our group includes subsidiaries and
              affiliates in the United States and other countries.
            </p>
            <p className="m-0">
              We may share personal information with our parent company,
              subsidiaries, affiliates, and other Tally Group companies for
              purposes such as responding to inquiries, managing business
              relationships, sales and business development, providing and
              supporting products and services, marketing, analytics, and
              business administration.
            </p>
            <p className="m-0">
              We may also share personal information with service providers that
              perform services on our behalf, including website hosting, customer
              relationship management, email and SMS communications, marketing,
              analytics, events, surveys, and other business operations.
            </p>
            <p className="m-0">
              We may disclose information when required by law or when reasonably
              necessary to protect our rights, property, safety, or security, or
              in connection with a merger, acquisition, sale of assets, or
              similar business transaction.
            </p>
          </Section>

          <Section id="cookies-and-analytics" title="Cookies and Analytics">
            <p className="m-0">
              We use cookies and similar technologies on our website. We
              currently use Google Analytics to understand how visitors use our
              website and to improve its performance and user experience.
            </p>
            <p className="m-0">
              Google Analytics may collect information such as IP address, device
              and browser information, approximate location, pages visited, and
              interactions with our website. We do not intentionally submit
              information such as your name, email address, or telephone number
              from our contact forms to Google Analytics.
            </p>
            <p className="m-0">
              You can control cookies through your browser settings. Depending on
              your location and applicable law, additional choices may be
              available.
            </p>
          </Section>

          <Section id="international-transfers" title="International Transfers">
            <p className="m-0">
              Because Tally Group is a global organization, personal information
              may be accessed, stored, processed, or transferred in the United
              States, Australia, or other countries where our affiliates or
              service providers operate.
            </p>
            <p className="m-0">
              Our website is intended primarily for businesses and users in the
              United States. However, individuals outside the United States may
              access our website and provide information to us. Where required by
              applicable law, we will take appropriate measures for international
              transfers of personal information.
            </p>
          </Section>

          <Section id="retention-and-security" title="Retention and Security">
            <p className="m-0">
              We retain personal information for as long as reasonably necessary
              for the purposes described in this Privacy Policy and as necessary
              or permitted for legal, regulatory, accounting, compliance,
              recordkeeping, and legitimate business purposes.
            </p>
            <p className="m-0">
              We maintain reasonable administrative, technical, and physical
              safeguards designed to protect personal information. However, no
              method of transmitting or storing information is completely secure.
            </p>
          </Section>

          <Section id="your-privacy-rights" title="Your Privacy Rights">
            <p className="m-0">
              Depending on where you live and applicable law, you may have rights
              regarding your personal information, including the right to request
              access to, correction of, or deletion of personal information, as
              well as the right to opt out of certain communications or
              processing activities.
            </p>
            <p className="m-0">
              To submit a privacy request or ask questions about our privacy
              practices, contact us at:{" "}
              <a
                href="mailto:contact_us@tally-group.com"
                className="text-navy font-medium underline decoration-navy/25 hover:text-turquoise hover:decoration-turquoise transition-colors"
              >
                contact_us@tally-group.com
              </a>
            </p>
            <p className="m-0">
              We may need to verify your identity before processing a request,
              and applicable law may limit or permit us to decline certain
              requests.
            </p>
          </Section>

          <Section id="children" title="Children">
            <p className="m-0">
              Our website is not directed to children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
          </Section>

          <Section id="third-party-websites" title="Third-Party Websites">
            <p className="m-0">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices and encourage you to review
              their privacy policies.
            </p>
          </Section>

          <Section id="changes-to-this-policy" title="Changes to This Policy">
            <p className="m-0">
              We may update this Privacy Policy from time to time. We will post
              the updated policy on our website and update the Effective Date
              above.
            </p>
          </Section>

          <Section id="contact-us" title="Contact Us">
            <address className="not-italic m-0 space-y-[4px]">
              <p className="m-0 font-medium text-navy">Tally Group USA</p>
              <p className="m-0">1450 Lake Robbins Drive, Suite 160</p>
              <p className="m-0">The Woodlands, TX 77380</p>
              <p className="m-0">
                Email:{" "}
                <a
                  href="mailto:contact_us@tally-group.com"
                  className="text-navy font-medium underline decoration-navy/25 hover:text-turquoise hover:decoration-turquoise transition-colors"
                >
                  contact_us@tally-group.com
                </a>
              </p>
            </address>
          </Section>
        </div>
      </article>
    </>
  );
}
