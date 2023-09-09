# AutoJobApply-Playwright
AutoJobApply-Playwright

## Running the Example Test
npx playwright test

## Run tests in UI Mode
npx playwright test --ui

## HTML Test Reports
npx playwright show-report

## Debugging Tests
Debugging all tests: npx playwright test --debug
Debugging one test file: npx playwright test example.spec.ts --debug
Debugging a test from the line number where the test(.. is defined): npx playwright test example.spec.ts:10 --debug

Running all tests

npx playwright test

Running a single test file

npx playwright test landing-page.spec.ts

Run a set of test files

npx playwright test tests/todo-page/ tests/landing-page/

Run files that have landing or login in the file name

npx playwright test landing login

Run the test with the title

npx playwright test -g "add a todo item"

Running tests in headed mode

npx playwright test landing-page.spec.ts --headed

Running tests on a specific project

npx playwright test landing-page.ts --project=chromium



