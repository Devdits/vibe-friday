import { expect, test } from "@playwright/test";

test("the starter serves its page and health endpoint", async ({ page }) => {
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

  await expect(page.getByRole("button", { name: "Check setup" })).toBeVisible();

  const healthResponse = await page.request.get("/api/health");
  expect(healthResponse.ok()).toBeTruthy();
  await expect(healthResponse.json()).resolves.toEqual({ status: "ok" });

  expect(consoleErrors).toEqual([]);
});
