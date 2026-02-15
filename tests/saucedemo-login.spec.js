const { test, expect } = require('@playwright/test');

test('should login to Sauce Demo with a standard user', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.getByText('Swag Labs')).toBeVisible();
});
