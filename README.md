# FullStackProgram-Assignment1

## Playwright UI Automation

This repository includes instructions to install and run Playwright for UI automation testing.

### Install

1. Install Node.js (LTS version recommended).
2. Install dependencies:

```bash
npm install
```

3. Install Playwright and browsers:

```bash
npx playwright install
```

### Run Tests

Run all Playwright tests with:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test path/to/test.spec.ts
```

Open Playwright test runner UI:

```bash
npx playwright test --ui
```

4. To run in headed mode or debug existing tests, use the Playwright UI. It provides test playback and browser controls.
