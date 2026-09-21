"use client";

import { useEffect, useState } from "react";

type StatusTone = "stable" | "attention" | "critical" | "network";

type PortalScenario = {
  portal: { heading: string; detail: string; tone: StatusTone };
  recovered: string;
  reported: { detail: string; tone: StatusTone | "informational" };
};

const scenarios: PortalScenario[] = [
  {
    portal: { heading: "Active portal", detail: "Stability: 84%", tone: "stable" },
    recovered: "3 objects recovered",
    reported: { detail: "5 objects reported", tone: "informational" },
  },
  {
    portal: {
      heading: "Active portal",
      detail: "Stability: 68%",
      tone: "attention",
    },
    recovered: "2 objects recovered",
    reported: { detail: "8 awaiting assessment", tone: "attention" },
  },
  {
    portal: {
      heading: "Active portal",
      detail: "Stability: 36%",
      tone: "critical",
    },
    recovered: "1 object recovered",
    reported: { detail: "17 awaiting assessment", tone: "critical" },
  },
  {
    portal: { heading: "Portal network", detail: "Stable", tone: "network" },
    recovered: "4 objects recovered",
    reported: { detail: "4 objects reported", tone: "informational" },
  },
];

const storageKey = "vibe-friday-portal-scenario";

function selectNextScenario() {
  const storedScenario = window.sessionStorage.getItem(storageKey);
  if (storedScenario === null) {
    window.sessionStorage.setItem(storageKey, "0");

    return scenarios[0];
  }

  const previous = Number(storedScenario);
  const previousIndex = Number.isInteger(previous) ? previous : -1;
  const candidates = scenarios
    .map((_, index) => index)
    .filter((index) => index !== previousIndex);
  const nextIndex = candidates[Math.floor(Math.random() * candidates.length)];

  window.sessionStorage.setItem(storageKey, String(nextIndex));

  return scenarios[nextIndex];
}

export function PortalStatusLabels() {
  const [scenario, setScenario] = useState(scenarios[0]);

  useEffect(() => {
    setScenario(selectNextScenario());
  }, []);

  return (
    <>
      <p
        className={`floating-label active-portal portal-${scenario.portal.tone}`}
      >
        <strong>{scenario.portal.heading}</strong>
        <span>{scenario.portal.detail}</span>
      </p>
      <p className="floating-label today-recovered recovered">
        <strong>Today</strong>
        <span>{scenario.recovered}</span>
      </p>
      <p
        className={`floating-label today-reported reported-${scenario.reported.tone}`}
      >
        <strong>Today</strong>
        <span>{scenario.reported.detail}</span>
      </p>
    </>
  );
}
