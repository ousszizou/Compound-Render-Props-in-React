import { defineConfig } from "@pandacss/dev";
import myPreset from "./src/theme/preset"
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  presets: [pandaPreset, myPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'react'
});
