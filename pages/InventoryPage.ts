import { Page } from '@playwright/test';

const productDataTestMap: Record<string, string> = {
  'Sauce Labs Backpack': 'add-to-cart-sauce-labs-backpack',
  'Sauce Labs Bike Light': 'add-to-cart-sauce-labs-bike-light',
  'Sauce Labs Bolt T-Shirt': 'add-to-cart-sauce-labs-bolt-t-shirt',
  'Sauce Labs Fleece Jacket': 'add-to-cart-sauce-labs-fleece-jacket',
  'Sauce Labs Onesie': 'add-to-cart-sauce-labs-onesie',
  'Test.allTheThings() T-Shirt (Red)': 'add-to-cart-test.allthethings()-t-shirt-(red)',
};

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCartByName(productName: string) {
    const dataTest = productDataTestMap[productName];
    if (!dataTest) throw new Error(`No mapping found for product: ${productName}`);
    await this.page.click(`[data-test="${dataTest}"]`);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
