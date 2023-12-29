import { Config } from "@pandacss/dev";
import { colors as semanticColors } from "./semantic-tokens/colors"
import { animations as semanticAnimations } from "./semantic-tokens/animations";
import { progressBar } from "./slot-recipes/progress";
import { keyframes } from "./keyframes";

const definePreset = <T extends Config>(config: T) => config;

export default definePreset({
  theme: {
    extend: {
      semanticTokens: {
        colors: semanticColors,
        animations: semanticAnimations,
      },
      slotRecipes: {
        progressBar,
      },
      keyframes,
    },
  },
});
