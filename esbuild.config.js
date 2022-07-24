// npm install --save-dev esbuild
// node esbuild.config.js

const { build } = require("esbuild");

build({
  entryPoints: ["./main.ts"],
  outdir: "./",
  bundle: true,
  external: [],
  platform: "node",
  logLevel: "info",
});
