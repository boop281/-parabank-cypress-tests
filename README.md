# Parabank Banking Application - Cypress Test Suite

Automated end-to-end testing for Parabank demo banking application using Cypress.

## 🎯 Features Tested

- ✅ User Registration Flow
- ✅ Login Functionality  
- ✅ Duplicate Username Validation
- ✅ Form Input Validation
- ✅ Dropdown Interactions (Static & Dynamic)
- ✅ Checkbox & Radio Button Handling
- ✅ Error Message Verification

## 🛠️ Tech Stack

- Cypress 13.x
- JavaScript
- Node.js

## 📁 Test Files

| File | Description |
|------|-------------|
| `registration.cy.js` | Complete user registration with all fields |
| `re-registration.cy.js` | Tests duplicate username error handling |
| `login.cy.js` | User login and account navigation |
| `dynamicDropdown.cy.js` | Dropdown selection testing |
| `checkboxdemo.cy.js` | Multiple checkbox selection |
| `radiobutton.cy.js` | Radio button validation |
| `firsttest.cy.js` | Basic login form interaction |

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/boop281/parabank-cypress-tests.git

# Navigate to project
cd parabank-cypress-tests

# Install dependencies
npm install

# Run tests in interactive mode
npx cypress open

# Run tests in headless mode
npx cypress run
```

## 📊 Test Coverage

- **Registration Flow**: Full form validation with 10+ input fields
- **Error Handling**: Validates error messages for duplicate usernames
- **Assertions**: Comprehensive use of `.should()` for verification
- **Form Elements**: Text inputs, dropdowns, checkboxes, radio buttons

## 🎓 What I Learned

This project demonstrates:
- Page navigation and form interaction
- Assertion implementation for validation
- Error message verification
- Dynamic and static dropdown handling
- Checkbox and radio button interactions
- Test organization and structure
- Best practices in Cypress testing

## 📝 Author

**Mubaraq Boade**  
Aspiring QA Engineer | Learning Cypress Automation

- LinkedIn: [Mubaraq Boade](https://www.linkedin.com/in/mubaraq-boade-50a25336a/)
- Portfolio: https://qa-developer-portfolio.vercel.app/

## 🔗 Test Site

Application Under Test: https://parabank.parasoft.com/

---

**⭐ If you found this helpful, please star this repository!**
