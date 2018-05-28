import * as React from "react";
import { style } from "typestyle-react";
import { LocationDescriptor, url } from "../../routing";
import { COLORS } from "../../styles";
import { Link } from "../Link";

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  location: LocationDescriptor;

  // A specific type of presentation for the link.
  presentation?: "bold" | "text" | "subtle";
}

/**
 * Renders an <a> (via <Link> for internal links).
 *
 * Intended to be used with the exported `locations` helpers.
 */
export class LocationLink extends React.PureComponent<Props> {
  public render() {
    const { className = "", location, presentation, ...other } = this.props;

    // Combine a passed-in (via props) class name, with the one that implements
    // the presentation prop, making sure to apply the presentation class first.
    const presentationClassName = this.presentationClassName(presentation);
    const combinedClassName = `${presentationClassName} ${className}`;
    return (
      <Link.Consumer>
        {Link => (
          <Link
            to={url(location)}
            className={combinedClassName}
            target={location.internal ? undefined : location.openInNewTab === true ? "_blank" : "_self"}
            {...other}
          />
        )}
      </Link.Consumer>
    );
  }

  /**
   * A helper to map from a presentation name to style class name.
   */
  private presentationClassName(presentation: Props["presentation"]): string {
    switch (presentation) {
      case "bold":
        return LocationLink.boldStyle;
      case "text":
        return LocationLink.textStyle;
      case "subtle":
        return LocationLink.subtleStyle;
      case undefined:
        return "";
    }
  }

  // What follows is a set of "presentations" for links. These provide pre-baked
  // styles to reduce repetition and increase consistency across the product.
  // During render, the class name is listed *first* so that it can be
  // overridden by an explicitly passed `className` prop (though this should be
  // avoided).

  // When used in the context of "bold" the link should be rendered purple and bold.
  private static readonly boldStyle = style({
    color: COLORS.purple,
    fontWeight: 700,

    $nest: {
      "&:hover, &:focus": {
        color: COLORS.purple,
        textDecoration: "underline"
      }
    }
  });

  // When used in the context of "text" the link should be rendered purple
  // then underlined on hover.
  private static readonly textStyle = style({
    color: COLORS.purple,

    $nest: {
      "&:hover, &:focus": {
        color: COLORS.purple,
        textDecoration: "underline"
      }
    }
  });

  // Subtle link rendered as grey text then purple on hover.
  private static readonly subtleStyle = style({
    color: COLORS.i60,
    height: "1em",

    $nest: {
      "&:hover, &:focus": {
        color: COLORS.purple
      }
    }
  });
}
