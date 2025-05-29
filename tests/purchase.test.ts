import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { Cart } from "../pages/Cart";

/*
End-to-End Purchase Test
Login with valid credentials
Add items to cart
Complete checkout process
Verify order confirmation

*/
test.describe("End-to-End Purchase Test", () => {
	test("🛒 End-to-End purchase flow", async ({ page }) => {
		const login = new LoginPage(page);
		const inventory = new InventoryPage(page);
		const cart = new Cart(page);

		await login.navigate();
		await login.login("standard_user", "secret_sauce");

		await expect(page).toHaveURL(/inventory.html/);

		await inventory.addItemToCartByName("Sauce Labs Backpack");
		await inventory.addItemToCartByName("Test.allTheThings() T-Shirt (Red)");

		await inventory.openCart();

		await cart.proceedToCheckout();
		await cart.fillShippingInfo("John", "Doe", "12345");
		await cart.completeOrder();

		const confirmationMessage = await cart.getConfirmationMessage();
		expect(confirmationMessage).toContain("Thank you for your order!");

		await cart.backToHome();
		await expect(page).toHaveURL(/inventory.html/);
	});
});
