import { expect, test } from "@playwright/test";

test("the public portal serves its page and health endpoint", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Lost something? Or found something that is not from here?",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "Reporting and the public registry are not available yet",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Report an object" }),
  ).toHaveCount(0);

  const healthResponse = await page.request.get("/api/health");
  expect(healthResponse.ok()).toBeTruthy();
  await expect(healthResponse.json()).resolves.toEqual({ status: "ok" });
});
