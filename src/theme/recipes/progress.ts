import { RecipeVariantProps, sva } from "../../../styled-system/css";

export const progressBar = sva({
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
  },
  defaultVariants: {
    size: "md",
  },
});

export type ProgressBarVariants = RecipeVariantProps<typeof progressBar>
