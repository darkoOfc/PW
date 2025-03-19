# PW
Playwright playground. Getting ready for generating tests and improving QA capabilities.
Playwright TypeScript Starter

Welcome to the Playwright TypeScript Starter project! This repository serves as a playground for learning Playwright automation with TypeScript. Below, you'll find everything you need to set up, run, and debug your tests effectively.

📌 Prerequisites

Before you begin, ensure you have the following installed:

Node.js (LTS version recommended) - [Download here](https://nodejs.org/en/download)

VS Code (recommended for best developer experience) - [Download here](https://code.visualstudio.com/download)

🚀 Getting Started

2️⃣ Install Dependencies

npm install

3️⃣ Install Playwright Browsers

npx playwright install

This command ensures that all required browsers (Chromium, Firefox, WebKit) are installed.

4️⃣ Run a Test

npx playwright test

By default, Playwright looks for tests inside the tests/ folder.

📜 Project Structure

playwright-ts-starter/
│-- tests/                # Test files go here
│-- playwright.config.ts  # Playwright configuration
│-- package.json          # Dependencies and scripts
│-- tsconfig.json         # TypeScript configuration
│-- README.md             # This file

🎯 Writing Your First Test

Create a new test file inside the tests/ folder, for example: tests/example.spec.ts

import { test, expect } from '@playwright/test';

test('Basic test example', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

Run the test with:

npx playwright test

⚙️ Configuration (playwright.config.ts)

Playwright uses a configuration file to define settings like test timeouts, browsers, and reporters.

Example playwright.config.ts:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,  // Set to true to run in headless mode
    viewport: { width: 1280, height: 720 },
  },
});

Modify this file to customize test execution.

🛠 Using Playwright with VSCode

1️⃣ Install the Playwright Extension

Search for "Playwright Test for VSCode" in the extensions marketplace and install it.

2️⃣ Run Tests in VSCode

Open any test file (*.spec.ts)

Click the Run or Debug buttons above the test

Use the Test Explorer panel to run or debug multiple tests

3️⃣ Playwright UI Mode

For an interactive test execution experience:

npx playwright test --ui

This opens the Playwright Test UI, allowing you to select, run, and debug tests visually.

🏗️ Playwright Features

🔹 Record Tests

Playwright allows recording user interactions into a test script.

npx playwright codegen https://example.com

This launches a browser where you can interact, and Playwright will generate test code.

🔹 Pick a Locator

To find elements interactively, run:

npx playwright codegen --target=locator

This helps in selecting the best locators for your tests.

🔹 Record New Actions in an Existing Test

Right-click inside a test file and select Record new.

Perform actions, and Playwright appends the recorded steps to your test.

🔹 Record at Cursor

Place the cursor inside a test function.

Use the Record at cursor command.

Actions are inserted directly at that position.

🔹 Reveal Test Output

Run tests inside VSCode.

Right-click a failed test and select Reveal test output to inspect logs and errors.

🔥 Running Tests in CI/CD

Playwright is optimized for CI/CD and integrates well with GitHub Actions, Jenkins, GitLab, and others.
Example GitHub Actions workflow:

name: Playwright Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Tests
        run: npx playwright test

📚 Additional Resources

Playwright Documentation

VSCode Playwright Extension

Playwright GitHub Repository

Happy Testing! 🚀

