import * as React from "react";

export const WithClassName = ({
  children,
  className
}: {
  children?: React.ReactElement<{ className?: string }>;
  className: string;
}) =>
  children !== undefined
    ? React.cloneElement(children, {
        className: children.props.className === undefined ? className : `${children.props.className} ${className}`
      })
    : null;
