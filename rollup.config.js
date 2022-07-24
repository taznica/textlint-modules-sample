// npm install --save-dev rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-json
// rollup --config rollup.config.js

import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "main.ts",
  output: {
    sourcemap: "inline",
    file: "main.js",
    format: "cjs",
  },
  plugins: [typescript(), nodeResolve({ browser: true }), commonjs(), json()],
};
