export type ScreenshotConfig = {
	codeSamplesDir: string;
	outputDir: string;
	themeIds: string[];
	defaultRemoteFiles: RemoteFilename[];
};

export type RemoteFilename =
	| "example.java"
	| "hello.ts"
	| "index.html"
	| "main.py"
	| "package.json"
	| "readme.md"
	| "rectangle.cpp"
	| "run.sh";
