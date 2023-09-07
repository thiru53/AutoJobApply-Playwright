import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.findasync.com/');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('login and apply job', async ({ page }) => {

  await page.goto('https://www.findasync.com/');
  await page.getByRole('img', { name: 'down-chevron' }).click();
  await page.getByLabel('Full-stack programming').check();
  await page.getByLabel('Back-end programming').check();
  await page.locator('div').filter({ hasText: /^Employment Type$/ }).click();
  await page.getByLabel('Full-time').check();
  await page.getByRole('link', { name: 'MediSpend Software Engineering Tech Lead Full-time | 🇺🇸 Anywhere in the United States Aug 30' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Apply to this Job' }).click();
  await page.getByRole('link', { name: 'Apply Now' }).click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('Tirupathaia');
  await page.getByLabel('First Name *').press('Tab');
  await page.getByLabel('Last Name *').fill('Salla');
  await page.getByLabel('Last Name *').press('Tab');
  await page.getByLabel('Email *').fill('thirupathaiah.salla@gmail.com');
  await page.getByLabel('Email *').press('Tab');
  await page.getByLabel('Phone *').fill('9113628865');
  await page.getByLabel('Phone *').press('Tab');
  await page.getByLabel('required').click();
  await page.getByRole('link', { name: 'Select a School' }).click();
  await page.getByRole('link', { name: 'Select a School' }).click();
  await page.locator('#select2-drop-mask').click();
  await page.getByRole('link', { name: 'Select a Degree' }).click();
  await page.locator('#select2-result-label-218').click();
  await page.getByRole('link', { name: 'Select a Discipline' }).click();
  await page.locator('#select2-result-label-300').click();
  await page.getByLabel('LinkedIn Profile').click();
  await page.getByLabel('LinkedIn Profile').fill('linkedin');
  await page.locator('#s2id_job_application_answers_attributes_1_boolean_value').getByRole('link', { name: '--' }).click();
  await page.locator('#select2-result-label-373').click();
  await page.getByLabel('Do you have 5 or more years of leadership experience? *').fill('yes');
  await page.getByLabel('Do you have 5 or more years of leadership experience? *').press('Tab');
  await page.locator('#s2id_job_application_answers_attributes_3_boolean_value').getByRole('link', { name: '--' }).click();
  await page.locator('#select2-result-label-375').click();
  await page.getByRole('link', { name: '--' }).click();
  await page.locator('#select2-result-label-378').click();
  await page.locator('#wrapper').click();
  await page.getByRole('button', { name: 'Submit Application' }).click();

  });

  test.afterEach(async ({ page }) => {
    //await checkNumberOfTodosInLocalStorage(page, 3);
  });

});

