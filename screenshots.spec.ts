import { test } from "@playwright/test";
import { readdirSync } from "node:fs";
import path from "node:path";
import { Controller } from "./helpers";
import config from "./screenshots.config";

const inputFiles = readdirSync(config.codeSamplesDir);

for (const themeId of config.themeIds) {
	const themeOutputDir = path.join(config.outputDir, themeId);
	const dstPath = (name: string) => path.join(themeOutputDir, name);

	test(`${themeId}`, async ({ page }) => {
		const ctrl = new Controller(page);

		await test.step("load editor", async () => {
			await ctrl.loadEditor(themeId);
		});

		await test.step("app.png", async () => {
			for (const filename of config.defaultRemoteFiles) {
				await ctrl.loadRemoteFile(filename);
			}
			await ctrl.saveApplicationScreenshot(dstPath("app.png"));
		});

		// code sample screenshots
		for (const filename of inputFiles) {
			const srcPath = path.join(config.codeSamplesDir, filename);

			await test.step(srcPath, async () => {
				await ctrl.loadLocalFile(srcPath);
				await ctrl.saveEditorScreenshot(dstPath(`${filename}.png`));
			});
		}
	});
}
