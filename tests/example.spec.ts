import { test, expect } from '@playwright/test';

test('basic home page smoke test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example/);
});
