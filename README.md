# BudgetWise — React + Vite

React application wrapper for the BudgetWise Smart Personal Finance Manager.

## Run locally
1. Install Node.js (18 or newer).
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build
Run `npm run build`; the production site is generated in `dist/`.

## Features
- Overview dashboard and income/expense charts
- Add, edit and delete transactions
- Category budgets and spending breakdowns
- Multiple accounts
- Recurring payment reminders
- Saving goals
- CSV export and JSON backup
- LocalStorage persistence
- Responsive dark dashboard

## Architecture note
The app is mounted and lifecycle-managed by React. To preserve all the supplied app's existing behavior during this conversion, the original dashboard rendering and feature logic is retained in `src/legacy.js`, with its markup in `src/legacy.html`. This is a migration scaffold rather than a full component-by-component rewrite; individual screens can be progressively converted to React components.
