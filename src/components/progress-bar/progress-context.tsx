/* eslint-disable react-refresh/only-export-components */
"use client";

import { createContext, useContext } from "react";
import { UseProgressReturn } from "./use-progress";

export const ProgressContext = createContext<UseProgressReturn | undefined>(
  undefined
);

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error(
      "useProgressContext must be used within an ProgressContext.Provider"
    );
  }
  return context;
};
