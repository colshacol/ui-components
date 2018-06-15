import * as React from "react";
import { styled } from "typestyle-react";
import { AnimateSlideDown } from "../..";
import { BORDER_RADIUS, BOX_SHADOW_BORDER, BOX_SHADOW_LIFTED, COLORS } from "../../styles";

export interface Props {
  autofocus?: boolean;
  color?: string;
  maxHeight?: number;
  maxWidth?: number;
  onLeafClick?: () => void;
}

export class Dropdown extends React.PureComponent<Props> {
  // ¯\_(ツ)_/¯
  // Focus messes with the Portal / Layer align="right" positioning
  // Timeout seems to fix it
  public focus(node: Node) {
    setTimeout(function() {
      if (node.firstChild instanceof HTMLElement) {
        node.firstChild.focus();
      }
    }, 100);
  }

  public render() {
    const { autofocus = false, color, maxHeight, maxWidth, onLeafClick } = this.props;
    const overflow = maxHeight !== undefined;

    return (
      <Dropdown.Context.Provider value={{ onLeafClick }}>
        <AnimateSlideDown>
          <Container
            style={{ maxWidth, maxHeight }}
            styled={{ color, overflow }}
            innerRef={e => {
              if (e !== null && autofocus) {
                this.focus(e);
              }
            }}
          >
            {this.props.children}
          </Container>
        </AnimateSlideDown>
      </Dropdown.Context.Provider>
    );
  }

  public static Context = React.createContext<Pick<Props, "onLeafClick">>({});
}

const Container = styled("div", ({ color, overflow }: { color?: string; overflow: boolean }) => ({
  backgroundColor: color !== undefined ? color : COLORS.white,
  border: "none",
  borderRadius: BORDER_RADIUS,
  boxShadow: color !== undefined ? BOX_SHADOW_LIFTED : `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_LIFTED}`,
  color: color !== undefined ? COLORS.white : undefined,
  display: "block",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
  outline: "none",
  textOverflow: "ellipsis",
  overflow: overflow ? "hidden" : undefined,
  overflowY: overflow ? "scroll" : undefined,
  padding: "8px 0"
}));
