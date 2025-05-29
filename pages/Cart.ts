import { Page } from '@playwright/test';

export class Cart {
  constructor(private page: Page) {}

  // Click the "Checkout" button in cart page
  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  // Fill the first name, last name, and postal code fields
  async fillShippingInfo(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  // Finalize the purchase
  async completeOrder() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  // Get the confirmation message (e.g., "Thank you for your order!")
  async getConfirmationMessage() {
    return await this.page.locator('.complete-header').innerText();
  }

  // back home
  async backToHome() {
    await this.page.getByRole('button', { name: 'Back Home' }).click();
  }

  // Optional: Cancel checkout
  async cancelCheckout() {
    await this.page.click('[data-test="cancel"]');
  }

    // Get form error message (e.g., "Error: Last Name is required")
  async getErrorMessage(): Promise<string> {
    return await this.page.locator('[data-test="error"]').innerText();
  }

}
