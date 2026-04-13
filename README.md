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

### Generate tests with Playwright CodeGen

Playwright CodeGen helps record browser actions and generate test code automatically.

```bash
npx playwright codegen https://example.com
```

- Replace `https://example.com` with the target URL.
- Actions in the browser are recorded and displayed in the CodeGen UI.
- Choose the language and save the generated script to a file.

Then run the generated test with:

```bash
npx playwright test path/to/generated.spec.ts
```

### Debugging and headed mode

To run in headed mode or debug existing tests, use the Playwright UI. It provides test playback and browser controls.
