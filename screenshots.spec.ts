import { type Locator, type Page, expect, test } from "@playwright/test";
import config from "./screenshots.config";

const quickInputSelector = 'input[aria-describedby="quickInput_message"]';

async function runCommand(page: Page, command: string) {
	await page.keyboard.press("Control+Shift+P");
	await page.fill(quickInputSelector, command);
	await page.locator(quickInputSelector).press("Enter");
	await expect(page.locator(quickInputSelector)).toBeHidden();
}

async function openFile(page: Page, filename: string) {
	await runCommand(page, `/${filename}`);
	await page
		.locator(".breadcrumbs")
		.locator(`a.label-name :has-text("${filename}")`)
		.isVisible();
}

async function saveScreenshot(
	locator: Locator,
	themeId: string,
	filename: string,
) {
	await locator.screenshot({
		animations: "disabled",
		path: `./dist/${themeId}/${filename}.png`,
	});
}

for (const themeId of config.themeIds) {
	test(`save screenshots for ${themeId}`, async ({ page }) => {
		// load theme
		await page.goto(`https://vscode.dev/editor/theme/${themeId}`);
		await expect(page.locator(".notification-list-item").getByRole('button', { name: 'Install' })).toBeVisible({timeout: 12000});

		// reset ui
		await runCommand(page, "> notifications.toggleDoNotDisturbMode");
		await runCommand(page, "> action.toggleMinimap");
		await runCommand(page, "> action.editorLayoutSingle");
		await runCommand(page, "> action.closeAllEditors");

		// overview screenshot
		const app = page.locator(".monaco-split-view2.horizontal").first();

		for (const filename of config.overviewFilenames) {
			await openFile(page, filename);
		}

		await saveScreenshot(app, themeId, "app");

		// code sample screenshots
		const editor = app.locator(".editor-group-container.active").first();

		for (const filename of config.editorFilenames) {
			await runCommand(page, "> action.closeAllEditors");
			await openFile(page, filename);
			await saveScreenshot(editor, themeId, filename);
		}
	});
}
