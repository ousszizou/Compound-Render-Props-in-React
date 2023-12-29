import { defineSlotRecipe } from "@pandacss/dev";

export const progressBar = defineSlotRecipe({
  className: "progress-bar",
  description: "Styles for the Progress Bar component",
  slots: ["root", "track", "indicator", "label"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
      w: "full",
    },
    track: {
      position: "relative",
      w: "full",
      bg: "secondary",
      rounded: "full",
      overflow: "hidden",
    },
    indicator: {
      h: "full",
      bg: "primary",
    },
    label: {},
  },
  variants: {
    size: {
      sm: {
        track: {
          h: "1",
        },
      },
      md: {
        track: {
          h: "2",
        },
      },
      lg: {
        track: {
          h: "3",
        },
      },
    },
    isIndeterminate: {
      true: {
        indicator: {
          pos: "absolute",
          w: "full !important",
          rounded: "full",
          transformOrigin: "left",
          animation: "indeterminate-bar"
        }
      },
    },
  },
  defaultVariants: {
    size: "md",
    isIndeterminate: true
  },
});
