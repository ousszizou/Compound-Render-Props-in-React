"use client";

import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { AriaProgressBarProps, useProgressBar } from "@react-aria/progress";
import React, { useMemo, useRef, useCallback, type ElementType } from "react";
import { PropGetter, dataAttr } from "./types";
import { mergeProps } from "@react-aria/utils";
// import { ProgressBarVariantProps, progressBar } from "../../../styled-system/recipes"
import { progress, ProgressVariantProps } from "../../new-styling-approach/progress"

type ComponentType =
  | ElementType
  | React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<unknown>>;

interface Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Determines whether the component should be rendered as a child element.
   */
  asChild?: boolean;
  /**
   * Ref to the DOM node for the progress's root element.
   */
  ref?: React.Ref<HTMLElement>;
}

// export type UseProgressProps = Props &
//   AriaProgressBarProps & ProgressBarVariantProps;

export type UseProgressProps = Props &
  AriaProgressBarProps & ProgressVariantProps;

export const useProgress = (props: UseProgressProps) => {
  const {
    ref,
    asChild,
    id,
    size,
    label,
    valueLabel,
    value = 0,
    minValue = 0,
    maxValue = 100,
    formatOptions = {
      style: "percent",
    },
    isIndeterminate,
    ...otherProps
  } = props;

  const {
    base: baseStyles,
    indicator: indicatorStyles,
    label: labelStyles,
    track: trackStyles,
  } = progress({ size, isIndeterminate });

  const domRef = useRef(ref);

  const Component: ComponentType = useMemo(() => {
    return asChild ? Slot : "div";
  }, [asChild]);

  const { progressBarProps, labelProps } = useProgressBar({
    id,
    label,
    valueLabel,
    value,
    minValue,
    maxValue,
    formatOptions,
    isIndeterminate,
  });

  const percentage = useMemo(() => {
    if (isIndeterminate) {
      return undefined;
    }
    return ((value - minValue) / (maxValue - minValue)) * 100;
  }, [value, minValue, maxValue, isIndeterminate]);

  const getProgressBarProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ref: domRef,
      // className: progressBar({ size, isIndeterminate }).root,
      className: baseStyles({ class: otherProps.className }),
      "data-indeterminate": dataAttr(isIndeterminate),
      ...mergeProps(progressBarProps, otherProps, additionalProps),
    }),
    [baseStyles, isIndeterminate, progressBarProps, otherProps],
  );

  const getLabelProps: PropGetter = useCallback(
    ({ className, ...additionalProps } = {}) => ({
      // className: progressBar({ size, isIndeterminate }).label,
      className: labelStyles({
        class: `${isIndeterminate ? "text-orange-400" : "text-black"
          } font-semibold ${className}`
      }),
      ...mergeProps(labelProps, additionalProps),
    }),
    [isIndeterminate, labelProps, labelStyles],
  );

  const getProgressBarTrackProps: PropGetter = useCallback(
    ({ className, ...additionalProps } = {}) => ({
      // className: progressBar({ size, isIndeterminate }).track,
      className: trackStyles({ class: className }),
      ...additionalProps,
    }),
    [trackStyles],
  );

  const getProgressBarIndicatorProps: PropGetter = useCallback(
    ({ className, ...additionalProps } = {}) => ({
      // className: progressBar({ isIndeterminate }).indicator,
      className: indicatorStyles({ class: className }),
      style: {
        width: percentage ? `${percentage.toFixed(0)}%` : "0",
        ...additionalProps.style,
      },
      ...additionalProps,
    }),
    [indicatorStyles, percentage],
  );

  return {
    Component,
    domRef,
    size,
    value,
    percentage,
    isIndeterminate,
    progressBarProps,
    labelProps,
    getProgressBarProps,
    getLabelProps,
    getProgressBarTrackProps,
    getProgressBarIndicatorProps
  };
};

export type UseProgressReturn = ReturnType<typeof useProgress>;
