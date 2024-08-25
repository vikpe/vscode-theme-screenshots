import type { ScreenshotConfig } from "./screenshots.types";

const config: ScreenshotConfig = {
	themeIds: ["vikpe.synthwave-alpha"],

	// filenames opened by default in overview screenshot
	overviewFilenames: ["hello.ts", "readme.md"],

	// files for individual editor screenshots
	// vscode theme playground files
	// see example at: https://vscode.dev/editor/theme/vikpe.synthwave-alpha
	editorFilenames: [
		"example.java",
		"hello.ts",
		"index.html",
		"main.py",
		"package.json",
		"readme.md",
		"rectangle.cpp",
		"run.sh",
	],
};

export default config;
