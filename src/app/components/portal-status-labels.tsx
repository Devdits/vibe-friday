"use client";

import { useSyncExternalStore } from "react";

import {
  portalScenarios,
  selectPortalScenario,
  type PortalScenario,
} from "./portal-scenarios";

const storageKey = "vibe-friday-portal-scenario";
let clientScenario: PortalScenario | undefined;

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return portalScenarios[0];
}

function getClientSnapshot() {
  clientScenario ??= selectNextScenario();

  return clientScenario;
}

function selectNextScenario() {
  const storedScenario = window.sessionStorage.getItem(storageKey);
  const selection = selectPortalScenario(storedScenario, Math.random());

  window.sessionStorage.setItem(storageKey, String(selection.index));

  return selection.scenario;
}

export function PortalStatusLabels() {
  const scenario = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

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
