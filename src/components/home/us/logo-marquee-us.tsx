"use client";

import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
  scale?: number;
};

/** Same customer set and sizing as the Japan homepage marquee. */
const partners: Partner[] = [
  { src: "1st-energy.svg", alt: "1st Energy", scale: 1.25 },
  { src: "gexa-energy.svg", alt: "Gexa Energy", scale: 1.2 },
  { src: "kiwi-energy.svg", alt: "Kiwi Energy" },
  { src: "pogo-energy.svg", alt: "Pogo Energy" },
  { src: "real-utilities.svg", alt: "Real Utilities" },
  { src: "santanna-energy-services.svg", alt: "Santanna Energy Services", scale: 1.2 },
  { src: "tonga-power-limited.svg", alt: "Tonga Power Limited" },
  { src: "varsity-energy.svg", alt: "Varsity Energy" },
];

const BASE_MAX_H = 96;
const BASE_MAX_W = 280;

function LogoItem({ p }: { p: Partner }) {
  const scale = p.scale ?? 1;
  return (
    <div className="shrink-0 h-[120px] flex items-center justify-center px-[72px]">
      <Image
        src={`/logos/clients/${p.src}`}
        alt={p.alt}
        width={320}
        height={128}
        className="w-auto h-auto object-contain"
        style={{
          maxHeight: `${BASE_MAX_H * scale}px`,
          maxWidth: `${BASE_MAX_W * scale}px`,
        }}
        loading="lazy"
      />
    </div>
  );
}

export function LogoMarqueeUS() {
  return (
    <section className="py-[24px] lg:py-[32px] overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-us-logo-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {partners.map((p) => (
                <LogoItem key={`${dup}-${p.alt}`} p={p} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes us-logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-us-logo-marquee {
          animation: us-logo-marquee 35s linear infinite;
        }
        .animate-us-logo-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-us-logo-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
