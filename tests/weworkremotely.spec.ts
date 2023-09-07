import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://weworkremotely.com/job-seekers/account/login');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('login and apply job', async ({ page }) => {

      await page.getByPlaceholder('you@email.com').fill('thirupathaiah.salla@gmail.com');
      await page.locator('#job_seeker_password').fill('Thiru@123');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await page.goto('https://weworkremotely.com/remote-jobs/search');

  });

  test.afterEach(async ({ page }) => {
    //await checkNumberOfTodosInLocalStorage(page, 3);
  });

});

