import { defineConfig } from "@pandacss/dev";
import { colors as semanticColors } from "./src/theme/semantic-tokens/colors";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: semanticColors,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'react'
});
