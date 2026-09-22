import { describe, expect, it } from "vitest";

import { portalScenarios, selectPortalScenario } from "./portal-scenarios";

describe("selectPortalScenario", () => {
  it("selects and records the first scenario for a new session", () => {
    expect(selectPortalScenario(null, 0.99)).toEqual({
      index: 0,
      scenario: portalScenarios[0],
    });
  });

  it.each([
    { randomValue: 0, expectedIndex: 0 },
    { randomValue: 0.34, expectedIndex: 2 },
    { randomValue: 0.99, expectedIndex: 3 },
  ])(
    "deterministically maps $randomValue while excluding the previous scenario",
    ({ randomValue, expectedIndex }) => {
      expect(selectPortalScenario("1", randomValue)).toEqual({
        index: expectedIndex,
        scenario: portalScenarios[expectedIndex],
      });
    },
  );

  it.each(["not-a-number", "-1", "99"])(
    "treats an invalid stored index (%s) as having no prior selection",
    (storedIndex) => {
      expect(selectPortalScenario(storedIndex, 0.5)).toEqual({
        index: 2,
        scenario: portalScenarios[2],
      });
    },
  );

  it.each([
    Number.NaN,
    Number.NEGATIVE_INFINITY,
    -1,
    1,
    Number.POSITIVE_INFINITY,
  ])(
    "always returns a scenario for an out-of-range random value (%s)",
    (randomValue) => {
      expect(selectPortalScenario("0", randomValue)).toEqual({
        index: randomValue === 1 ? 3 : 1,
        scenario: randomValue === 1 ? portalScenarios[3] : portalScenarios[1],
      });
    },
  );
});
