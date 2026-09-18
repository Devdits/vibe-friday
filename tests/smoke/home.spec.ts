import { expect, test } from "@playwright/test";

test("the starter is healthy and interactive", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Vibe Friday is ready." }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Check setup" }).click();
  await expect(page.getByRole("status")).toHaveText("Environment ready");
  expect(consoleErrors).toEqual([]);
});
