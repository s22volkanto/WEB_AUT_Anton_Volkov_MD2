# WEB_AUT_Anton_Volkov_MD2

## Task Overview

This Cypress test automates two scenarios for:  
[https://katalon-demo-cura.herokuapp.com/](https://katalon-demo-cura.herokuapp.com/)

---

## Scenario 1 – Make an Appointment

- Login with demo credentials:
  - Username: John Doe
  - Password: ThisIsNotAPassword
- Select:
  - Facility: Seoul CURA Healthcare Center
  - Apply for hospital readmission: 
  - Program: Medicaid
  - Date: 30 (via calendar widget)
  - Comment: CURA Healthcare Service
- Book the appointment
- Validate that all values match the input

---

## Scenario 2 – Appointment History is Empty

- Login again
- Open sidebar via burger menu
- Navigate to **History**
- Validate message: *No appointment*

---

## 🛠 Project Structure

```
WEB_AUT_Anton_Volkov_MD2/
├── cypress/
│   ├── e2e/
│   │   └── curaAppointment.cy.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── package.json
└── README.md
```

---

## Run Instructions

> Requires Node.js and Cypress installed

```bash
npm install
npx cypress open
```

Then run `curaAppointment.cy.js`.

