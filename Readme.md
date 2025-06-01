# 🧪 SauceDemo Automated Testing with Playwright & TypeScript

This project contains end-to-end automated tests for the [SauceDemo web application](https://www.saucedemo.com/) using [Playwright](https://playwright.dev/) and TypeScript.

---

## 📋 Overview

This project covers two key test scenarios:

1. **Login Test**  
   - ✅ Valid login with `standard_user` and `secret_sauce`  
   - ❌ Invalid login shows appropriate error message

2. **End-to-End Purchase Test**  
   - ✅ Login with valid credentials  
   - 🛒 Add items to cart  
   - 🧾 Complete the checkout form  
   - ✅ Verify order confirmation

All tests follow the **Page Object Model (POM)** pattern for maintainability and scalability.



## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
npx playwright install
npx playwright test -- ui

```
## 🧠 Design Decisions
- Used Page Object Model for separation of test logic and page interactions.
- Leveraged data-test attributes for stable element selectors.
- Created a reusable product name-to-selector map for robust item selection.
- Test assertions ensure URLs and confirmation messages match expected behavior.

## ✅ Technologies Used
- Playwright for browser automation
- TypeScript for type safety
- Page Object Model pattern for clean code