import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const sections = ['', 'about/', 'research/', 'publications/', 'projects/', 'cv/', 'contact/'];
for (const section of sections) {
  test(`English and Chinese ${section || 'home'} render and switch languages`, async ({ page }, info) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(`/${section}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('main h1')).toBeVisible();
    if (!section && !process.env.CI) {
      await mkdir('../previews', { recursive: true });
      await page.screenshot({ path: `../previews/${info.project.name}-en.png`, fullPage: true });
    }
    await page.locator('[data-language-switch]').click();
    await expect(page).toHaveURL(`/zh/${section}`);
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(page.locator('main h1')).toBeVisible();
    if (!section && !process.env.CI) await page.screenshot({ path: `../previews/${info.project.name}-zh.png`, fullPage: true });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('[data-language-switch]').click();
    await expect(page).toHaveURL(`/${section}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}
test('Navigation reaches each section', async ({ page }, info) => {
  await page.goto('/');
  for (const section of ['publications/', 'projects/']) {
    if (info.project.name === 'mobile') await page.locator('.mobile-menu summary').click();
    const nav = info.project.name === 'mobile' ? '.mobile-menu nav' : '.desktop-nav';
    await page.locator(`${nav} a[href="/${section}"]`).click();
    await expect(page).toHaveURL(`/${section}`);
    await expect(page.locator(`${nav} a[aria-current="page"]`)).toHaveAttribute('href', `/${section}`);
  }
});
test('Keyboard skip link reaches content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/#main');
});
