import { defineConfig, devices } from "@playwright/test";

// https://playwright.dev/docs/test-configuration
export default defineConfig({
	fullyParallel: true,
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
