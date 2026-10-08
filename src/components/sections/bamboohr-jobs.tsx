"use client";

import { useEffect, useState } from "react";

const BAMBOOHR_DOMAIN = "tallygroup.bamboohr.com";
const EMBED_URL = `https://${BAMBOOHR_DOMAIN}/jobs/embed2.php?version=1.0.0`;
const CAREERS_URL = `https://${BAMBOOHR_DOMAIN}/careers`;

type BambooPosition = {
  id: number | string;
  name: string;
  url: string;
  location?: string;
};

type BambooDepartment = {
  id: number | string;
  label: string;
  positions: BambooPosition[];
};

type BambooEmbedResponse = {
  success?: boolean;
  labels?: {
    heading?: string;
    blankStateTitle?: string;
    blankStateBody?: string;
  };
  departments?: BambooDepartment[];
};

type LoadState = "loading" | "ready" | "empty" | "error";

export function BambooHrJobs() {
  const [state, setState] = useState<LoadState>("loading");
  const [departments, setDepartments] = useState<BambooDepartment[]>([]);
  const [blankTitle, setBlankTitle] = useState(
    "We currently have no open positions.",
  );
  const [blankBody, setBlankBody] = useState(
    "Please check back as we will most certainly be looking for great people to join our team in the future.",
  );

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    setState("loading");

    fetch(EMBED_URL, {
      credentials: "omit",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as BambooEmbedResponse;
        if (cancelled) return;

        if (data.labels?.blankStateTitle) {
          setBlankTitle(data.labels.blankStateTitle);
        }
        if (data.labels?.blankStateBody) {
          setBlankBody(data.labels.blankStateBody);
        }

        const deps = (data.departments ?? []).filter(
          (d) => Array.isArray(d.positions) && d.positions.length > 0,
        );
        setDepartments(deps);
        setState(deps.length > 0 ? "ready" : "empty");
      })
      .catch((err) => {
        if (cancelled || err?.name === "AbortError") return;
        setState("error");
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return (
    <div className="bamboohr-embed bg-white rounded-xl border border-stroke1 p-[24px] sm:p-[32px] lg:p-[40px]">
      {state === "loading" && (
        <div className="flex items-center gap-[10px] text-sm text-fg2">
          <span
            aria-hidden
            className="inline-block w-[14px] h-[14px] rounded-full border-2 border-stroke1 border-t-turquoise animate-spin"
          />
          Loading open positions...
        </div>
      )}

      {state === "error" && (
        <div className="text-sm text-fg2">
          We couldn&apos;t load roles right now.{" "}
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-turquoise font-medium hover:underline"
          >
            View all open roles on BambooHR
          </a>
          .
        </div>
      )}

      {state === "empty" && (
        <div className="text-sm text-fg2">
          <p className="m-0 font-semibold text-navy">{blankTitle}</p>
          <p className="mt-[8px] m-0">{blankBody}</p>
        </div>
      )}

      {state === "ready" && (
        <div className="flex flex-col gap-[28px]" aria-live="polite">
          {departments.map((department) => (
            <div key={`${department.id}-${department.label || "general"}`}>
              {department.label ? (
                <h3 className="m-0 mb-[12px] text-[15px] font-semibold text-navy tracking-tight">
                  {department.label}
                </h3>
              ) : null}
              <ul className="m-0 p-0 list-none flex flex-col gap-[10px]">
                {department.positions.map((position) => (
                  <li key={position.id}>
                    <a
                      href={position.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[4px] sm:gap-[16px] rounded-lg border border-stroke1 px-[16px] py-[14px] hover:border-navy/25 hover:bg-bg2 transition-colors"
                    >
                      <span className="text-sm font-semibold text-navy group-hover:text-navy-dark">
                        {position.name}
                      </span>
                      {position.location ? (
                        <span className="text-[13px] text-fg2 shrink-0">
                          {position.location}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mt-[24px] pt-[16px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[12px] text-[12px] text-fg2">
        <span>Job listings powered by BambooHR</span>
        <a
          href={CAREERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-turquoise font-medium hover:underline inline-flex items-center gap-[4px]"
        >
          View all roles on BambooHR
          <span className="material-symbols-outlined text-[14px]" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>
    </div>
  );
}
