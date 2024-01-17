"use client";

import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { AriaProgressBarProps, useProgressBar } from "@react-aria/progress";
import React, { useMemo, useRef, useCallback, type ElementType } from "react";
import { PropGetter, dataAttr } from "./types";
import { mergeProps } from "@react-aria/utils";

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

export type UseProgressProps = Props &
  AriaProgressBarProps;

export const useProgress = (props: UseProgressProps) => {
  const {
    ref,
    asChild,
    id,
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
      "data-indeterminate": dataAttr(isIndeterminate),
      ...mergeProps(progressBarProps, otherProps, additionalProps),
    }),
    [isIndeterminate, progressBarProps, otherProps],
  );

  const getLabelProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ...mergeProps(labelProps, additionalProps),
    }),
    [labelProps],
  );

  const getProgressBarTrackProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ...additionalProps,
    }),
    [],
  );

  const getProgressBarIndicatorProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      style: {
        width: percentage ? `${percentage.toFixed(0)}%` : "0",
        ...additionalProps.style,
      },
      ...additionalProps,
    }),
    [percentage],
  );

  return {
    Component,
    domRef,
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
