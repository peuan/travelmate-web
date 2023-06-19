# Travelmate - Contributing Guide

Welcome to the Travelmate project! This guide provides step-by-step instructions for contributing to the project.

Please make sure to read the following documents to get an overview of the project:

- [Project Kick-off and Big Picture Overview](https://github.com/peuan/travelmate-web/blob/main/.github/project-kick-off-and-big-picture-overview.md)
- [Purpose, Scope, Target Users, Use Cases, and Key Features / USP](https://github.com/peuan/travelmate-web/blob/main/.github/purpose-scope-target-users-use-cases-key-features.md)
- [Technology Stack](https://github.com/peuan/travelmate-web/blob/main/.github/technology-stack.md)

## Getting Started

### Step 1: Clone the project repository

Clone the Travelmate project repository to your local machine using the following command:

```bash
git clone https://github.com/peuan/travelmate-web.git
```

### Step 2: Install dependencies

Navigate to the project directory and install all the required dependencies:

```bash
cd travelmate-web
yarn install
```

### Step 3: Run the development server

Start the development server by running the following command:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to see the application in action.

## Docker

To run the application using Docker, use the following command:

```bash
docker-compose up -d
```

## Storybook

To design and customize UI components, use Storybook:

```bash
yarn storybook
```

Open http://localhost:6006 in your browser to access Storybook.

## Playwright

For end-to-end testing, we use Playwright.

To open Playwright UI, run the following command:

```bash
yarn playwright-ui
```

## Jest

Unit testing is performed using Jest.

To run tests in a CI environment, use the following command:

```bash
yarn test:ci

```

To generate a coverage report, run:

```bash
yarn test-report
```

## Conventional Commits and Changelog

```bash
yarn commit
```
