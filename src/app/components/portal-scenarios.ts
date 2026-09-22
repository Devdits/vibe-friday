export type StatusTone = "stable" | "attention" | "critical" | "network";

export type PortalScenario = {
  portal: { heading: string; detail: string; tone: StatusTone };
  recovered: string;
  reported: { detail: string; tone: StatusTone | "informational" };
};

export const portalScenarios = [
  {
    portal: {
      heading: "Active portal",
      detail: "Stability: 84%",
      tone: "stable",
    },
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
] as const satisfies readonly PortalScenario[];

export type PortalScenarioSelection = {
  index: number;
  scenario: PortalScenario;
};

export function selectPortalScenario(
  storedIndex: string | null,
  randomValue: number,
): PortalScenarioSelection {
  if (storedIndex === null) {
    return { index: 0, scenario: portalScenarios[0] };
  }

  const parsedIndex = Number(storedIndex);
  const previousIndex = Number.isInteger(parsedIndex) ? parsedIndex : -1;
  const candidateIndexes = portalScenarios
    .map((_, index) => index)
    .filter((index) => index !== previousIndex);
  const boundedRandomValue = Number.isFinite(randomValue)
    ? Math.min(Math.max(randomValue, 0), 1 - Number.EPSILON)
    : 0;
  const candidateIndex = Math.floor(
    boundedRandomValue * candidateIndexes.length,
  );
  const nextIndex = candidateIndexes[candidateIndex] ?? 0;

  return {
    index: nextIndex,
    scenario: portalScenarios[nextIndex] ?? portalScenarios[0],
  };
}
