import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.naukri.com/');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('apply job in naukri', () => {
  test('login, update, search jobs and apply', async ({ page }) => {

  await page.goto('https://www.naukri.com/nlogin/login?URL=https://www.naukri.com/mnjuser/homepage');
  await page.getByPlaceholder('Enter Email ID / Username').fill('thiru53@yahoo.com');
  await page.getByPlaceholder('Enter Password').fill('25325800');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await page.getByRole('link', { name: 'View profile' }).click();
  await page.locator('em').filter({ hasText: 'editOneTheme' }).click()
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByText('Search jobs here').click();
  await page.getByPlaceholder('Enter keyword / designation / companies').fill('java');
  await page.getByTitle('Java', { exact: true }).getByText('Java').click();
  await page.locator('span').filter({ hasText: /^Java Developer$/ }).click();
  await page.getByText('Java Fullstack').click();
  await page.locator('#ni-gnb-header-section').getByText('Spring Boot', { exact: true }).click();
  await page.locator('#ni-gnb-header-section').getByText('Microservices').click();
  await page.getByText('Java Development').click();
  await page.getByText('Java Programming').click();
  await page.getByText('Core Java Development').click();
  await page.getByText('Java Spring Boot').click();

  await page.locator('.ni-gnb-icn').first().click();
  await page.getByText('14 years', { exact: true }).click();
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('label').filter({ hasText: '50-75 Lakhs' }).locator('i').click();


  const arr =   await page.locator('.list article.jobTuple');
  console.log('Arr ::: ',`${arr}`)
    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1]
    ]);

    //await checkNumberOfTodosInLocalStorage(page, 2);
  });
});

