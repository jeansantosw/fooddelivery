
# fooDDelivery

The app is a management platform developed for food businesses, allowing owners to manage their establishments conveniently and efficiently. With an intuitive dashboard, users can record and edit business information, track performance metrics, manage orders in real time, and easily update their statuses. The system offers daily and monthly revenue graphs, advanced filters for metrics and orders, and quick access to details and invoices, making management more agile and organized.

![Logo](https://github.com/jeansantosw/fooddelivery/blob/main/doc/img/logo.png)

## Color documentation

| Color               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Background       |  #fefefe |
| Foreground       |  #09090b |
| Primary       |  #ff1f56 |
| Primary Foreground       |  #fef0f1 |
| Secondary       |  #f3f3f4 |
| Secondary Foreground       |  #17171a |
| Accent       |  #f3f3f4 |
| Accent Foreground       |  #17171a |
| Destructive       |  #e7000a |


## Documentation

[Documentation](https://github.com/jeansantosw/fooddelivery/blob/main/doc/DOC.md)


## 🛠 Skills
Javascript, typescript, React 19, zod, react-query



## Installation

Install with npm

```bash
  git clone https://github.com/jeansantosw/fooddelivery.git
  cd fooddelivery
  npm install
  npm run dev
  npm run test
  npm run dev:mocks:test

```
    
## Roadmap

| Fase       | Status          | Descrição                                                          |
| ---------- | --------------- | ------------------------------------------------------------------ |
| **Project phase 1** | ✅ Completed     | Store registration, basic panel, order management with status. |
| **Project phase 2** | ✅ Completed     | Dashboard with graphs and metrics.     |
| **Project phase 3** | ✅ Completed | Order details, invoice view, profile editing.      |
| **Project phase 4** | ✅ Completed     | Real-time notifications for order updates.            |
| **Project phase 4** | ✅ Completed     | Filter by ID, name and status.            |
| **Project phase 5** | ⏳ Planejado     | Integration with payment systems and delivery gateways.        |
| **Project phase 6** | ⏳ Planejado     | Mobile application for management outside the computer.                  |
| **Project phase 7** | ⏳ Planejado     | Advanced reporting and data export (CSV, PDF).             |
| **Project phase 8** | ⏳ Planejado     | Multi-user with different permissions and access levels. RBAC      |


## Stack used

**Front-end:** 

Javascript, typescript, React 19, zod

tanstack/react-query, axios

react-hook-form, react-router-dom

playwright e2e teste, msw

tailwindcss, shadcn



## Running the tests

To run the tests, run the following command

```bash
  npm run test
  npm run dev:mocks:test
  npx playwright test --ui 
```

