import type { ScreenshotConfig } from "./screenshots.types";

const config: ScreenshotConfig = {
	// ids of themes to screenshot
	themeIds: ["vikpe.synthwave-alpha", "Yummygum.city-lights-theme"],

	// filenames opened by default in overview screenshot
	overviewFilenames: ["hello.ts", "readme.md"],

	// files for editor screenshots per language (vscode theme playground files)
	// view available files at: https://vscode.dev/editor/theme/vikpe.synthwave-alpha
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
