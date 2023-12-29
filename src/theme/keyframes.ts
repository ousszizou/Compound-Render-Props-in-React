import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  "indeterminate-bar": {
    "0%": {
      transform: "translateX(-50%) scaleX(0.2)",
    },
    "100%": {
      transform: "translateX(100%) scaleX(1)",
    },
  }
});
