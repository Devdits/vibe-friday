"use client";

import { useState } from "react";

type HealthResponse = {
  status: string;
};

export function SetupCheck() {
  const [message, setMessage] = useState("Not checked yet");

  async function checkSetup() {
    setMessage("Checking…");

    try {
      const response = await fetch("/api/health");
      const health = (await response.json()) as HealthResponse;

      setMessage(
        response.ok && health.status === "ok"
          ? "Environment ready"
          : "Environment needs attention",
      );
    } catch {
      setMessage("Environment needs attention");
    }
  }

  return (
    <div className="setup-check">
      <button type="button" onClick={checkSetup}>
        Check setup
      </button>
      <p className="status" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
