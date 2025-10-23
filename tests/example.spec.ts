import { test, expect } from '@playwright/test';

test('basic navigation and layout', async ({ page }) => {
  await page.goto('/');
  
  // Check hero section is visible
  await expect(page.locator('h1')).toBeVisible();
  
  // Check navigation works
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  
  await page.click('text=Services');
  await expect(page).toHaveURL('/services');
  
  await page.click('text=Contact');
  await expect(page).toHaveURL('/contact');
});