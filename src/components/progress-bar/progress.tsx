"use client";

import React from "react";
import { useProgress, type UseProgressProps } from "./use-progress";
import { ProgressContext, useProgressContext } from "./progress-context";

interface ProgressBarProps extends UseProgressProps {}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ children, className,...props }, ref) => {
    const state = useProgress({ ...props, ref });
    return (
      <ProgressContext.Provider value={state}>
        <div {...state.getProgressBarProps()} className={className}>{children}</div>
      </ProgressContext.Provider>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

interface ProgressBarTrackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ProgressBarTrack = React.forwardRef<
  HTMLDivElement,
  ProgressBarTrackProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});
ProgressBarTrack.displayName = "ProgressBarTrack";

interface ProgressBarIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
    percentage: number
  }

export const ProgressBarIndicator = React.forwardRef<
  HTMLDivElement,
  ProgressBarIndicatorProps
>(({ className, percentage, ...props }, ref) => {
  // const { percentage } = useProgressContext();
  return (
    <div
      ref={ref}
      style={{ width: percentage ? `${percentage.toFixed(0)}%` : "0" }}
      className={className}
      {...props}
    />
  );
});
ProgressBarIndicator.displayName = "ProgressBarIndicator";

interface ProgressBarLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const ProgressBarLabel = React.forwardRef<
  HTMLSpanElement,
  ProgressBarLabelProps
>(({ children, className,...props }, ref) => {
  const { getLabelProps } = useProgressContext();
  return (
    <span ref={ref} {...getLabelProps()} className={className} {...props}>
      {children}
    </span>
  );
});
ProgressBarLabel.displayName = "ProgressBarLabel";
