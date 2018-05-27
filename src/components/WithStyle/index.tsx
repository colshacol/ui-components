import * as React from "react";

/**
 * Merges `style` into its child element style prop, overriding child styles in
 * case of conflicts.
 */
export const WithStyle = ({
  children,
  style
}: {
  children?: React.ReactElement<{ style?: React.CSSProperties }>;
  style?: React.CSSProperties;
}) =>
  children !== undefined
    ? React.cloneElement(children, {
        style: children.props.style === undefined ? style : { ...children.props.style, ...style }
      })
    : null;
