import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Tally Group team. Book a demo, ask a question, or explore a partnership.",
};

const offices = [
  {
    city: "Sydney",
    address: "Level 3, 45 Jones St, Ultimo, NSW 2007",
    icon: "location_on",
  },
  {
    city: "Melbourne",
    address: "11-13 Cubitt St, Cremorne, VIC 3121",
    icon: "location_on",
  },
  {
    city: "Auckland",
    address: "Level 2, 10 Viaduct Harbour Ave, Auckland 1010",
    icon: "location_on",
  },
];

const contactMethods = [
  {
    icon: "mail",
    title: "Email us",
    description: "Our team will get back to you within 24 hours.",
    detail: "enquiries@tally-group.com",
    href: "mailto:enquiries@tally-group.com",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
    description: "Follow us for the latest news and updates.",
    detail: "Tally Group",
    href: "https://www.linkedin.com/company/tally-group",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            Get in touch.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            Whether you&apos;re looking for a demo, have questions about our products, or want to explore a partnership, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[48px] lg:gap-[72px]">
            {/* Left - Contact Info */}
            <div>
              <div className="mb-[48px]">
                <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
                  <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                  Reach out
                </div>
                <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
                  Our friendly team would love to hear from you.
                </h2>
              </div>

              <div className="flex flex-col gap-[24px]">
                {contactMethods.map((method) => (
                  <div key={method.title} className="bg-bg2 rounded-xl p-[24px] flex gap-[16px]">
                    {method.icon === "linkedin" ? (
                      <div className="w-10 h-10 shrink-0 grid place-items-center">
                        <Image src="/logos/linkedin.png" alt="LinkedIn" width={36} height={36} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 shrink-0 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                        <span className="material-symbols-outlined text-[20px]">{method.icon}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-[15px] font-semibold text-fg1">{method.title}</h3>
                      <p className="text-sm text-fg2 mt-[4px]">{method.description}</p>
                      <a
                        href={method.href}
                        className="text-sm font-semibold text-navy hover:text-turquoise transition-colors mt-[8px] inline-block"
                        {...("external" in method && method.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {method.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div className="mt-[48px]">
                <h3 className="text-lg font-semibold text-navy mb-[20px]">Our offices</h3>
                <div className="flex flex-col gap-[16px]">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-[12px]">
                      <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                        <span className="material-symbols-outlined text-[18px]">{office.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-fg1">{office.city}</div>
                        <div className="text-sm text-fg2">{office.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white border border-stroke1 rounded-xl p-[32px] lg:p-[40px] h-fit">
              <h3 className="text-xl font-semibold text-navy mb-[24px]">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Prefer to book a demo directly?
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.55]">
            Schedule a personalised walkthrough with one of our product specialists.
          </p>
          <div className="mt-[32px]">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
