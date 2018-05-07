import * as React from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { LinkProps } from "react-router-dom";

export const Link = React.createContext<React.ComponentClass<LinkProps>>(ReactRouterDomLink);
