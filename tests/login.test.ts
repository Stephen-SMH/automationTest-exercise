import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

/*
Login Test
Verify successful login with valid credentials
Verify error message with invalid credentials
*/

test.describe("Login Test", () => {
	test("successful login", async ({ page }) => {
		const login = new LoginPage(page);
		await login.navigate();
		await login.login("standard_user", "secret_sauce");
		await expect(page).toHaveURL(/inventory.html/);
	});

	test("login failure shows error message", async ({ page }) => {
		const login = new LoginPage(page);
		await login.navigate();
		await login.login("wrong_user", "wrong_pass");
		const msg = await login.getErrorMessage();
		expect(msg).toContain("Epic sadface: Username and password do not match any user in this service");
	});
});
