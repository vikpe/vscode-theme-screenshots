import type { ScreenshotConfig } from "./screenshots.types";

const config: ScreenshotConfig = {
	themeIds: ["vikpe.synthwave-alpha", "Yummygum.city-lights-theme"],
	codeSamplesDir: "code_samples",
	outputDir: "dist",

	// remote files opened in the application overview screenshot (app.png)
	// see https://vscode.dev/editor/theme/vikpe.synthwave-alpha for examples
	defaultRemoteFiles: ["package.json", "readme.md"],
};

export default config;
