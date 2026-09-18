import { describe, expect, it } from "vitest";

import { formatProjectName } from "./project-name";

describe("formatProjectName", () => {
  it("turns a slug into a display name", () => {
    expect(formatProjectName("vibe-friday")).toBe("Vibe Friday");
  });

  it("normalizes whitespace", () => {
    expect(formatProjectName("  agent   playground  ")).toBe(
      "Agent Playground",
    );
  });
});
