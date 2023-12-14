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
    formatOptions,
    isIndeterminate,
  });

  const getProgressBarProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ref: domRef,
      "data-indeterminate": dataAttr(isIndeterminate),
      ...mergeProps(progressBarProps, otherProps, additionalProps),
    }),
    [domRef, isIndeterminate, progressBarProps, otherProps],
  );

  const getLabelProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ...mergeProps(labelProps, additionalProps),
    }),
    [labelProps],
  );

  return {
    Component,
    domRef,
    getProgressBarProps,
    getLabelProps,
  };
};

export type UseProgressReturn = ReturnType<typeof useProgress>;
