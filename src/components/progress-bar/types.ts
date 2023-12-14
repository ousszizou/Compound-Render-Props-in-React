/* eslint-disable @typescript-eslint/no-explicit-any */

// NOTE: This code is taken from nextUI

export interface DOMElement extends Element, HTMLOrSVGElement { }

type DataAttributes = {
  [dataAttr: string]: any;
};

export type Merge<M, N> = N extends Record<string, unknown>
  ? M
  : Omit<M, keyof N> & N;

export type DOMAttributes<T = DOMElement> = React.AriaAttributes &
  React.DOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type Booleanish = boolean | "true" | "false";
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "true" : undefined) as Booleanish;
