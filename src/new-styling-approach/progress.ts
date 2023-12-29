import { tv, type VariantProps } from 'tailwind-variants';

export const progress = tv({
  slots: {
    base: 'flex flex-col gap-2 w-full',
    track: 'z-0 relative bg-[#f4f4f5] w-full rounded-full overflow-hidden',
    indicator: 'h-full bg-[#18181b]',
    label: '',
  },
  variants: {
    size: {
      sm: {
        track: "h-1",
      },
      md: {
        track: "h-2",
      },
      lg: {
        track: "h-3",
      },
    },
    isIndeterminate: {
      true: {
        indicator: ["absolute", "!w-full", "origin-left", "animate-indeterminate-bar"],
      },
    },
  },
  defaultVariants: {
    size: "md",
    isIndeterminate: false,
  },
});

export type ProgressVariantProps = VariantProps<typeof progress>;
