import * as React from "react";
import IconMoreHorizontal from "../../icons/IconMoreHorizontal";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { FlipFlop } from "../FlipFlop";
import { Layer } from "../Layer";
import { Portal } from "../Portal";
import { SubtleButton } from "../SubtleButton";

export interface Props {
  align: "left" | "right";
  id?: string;
  onToggle?: (active: boolean) => void;
  subtleButtonHeight?: number;
  subtle?: boolean;
}

let counter: number = 0;

export class MeatballMenu extends React.PureComponent<Props> {
  private readonly id = `MeatballMenu_${counter++}`;

  public render() {
    const { align, children, id = this.id, onToggle, subtleButtonHeight, subtle = false } = this.props;
    return (
      <FlipFlop>
        {({ toggle, active }) => (
          <>
            {subtle === true ? (
              <SubtleButton
                height={subtleButtonHeight}
                id={id}
                onClick={() => {
                  toggle();
                  if (onToggle !== undefined) {
                    onToggle(!active);
                  }
                }}
              >
                <IconMoreHorizontal />
              </SubtleButton>
            ) : (
              <Button
                id={id}
                onClick={() => {
                  toggle();
                  if (onToggle !== undefined) {
                    onToggle(!active);
                  }
                }}
              >
                <IconMoreHorizontal />
              </Button>
            )}
            {active ? (
              <Portal>
                <Layer
                  align={align}
                  onDismissAttempt={() => {
                    toggle();
                    if (onToggle !== undefined) {
                      onToggle(!active);
                    }
                  }}
                  parentId={id}
                >
                  <Dropdown>{children}</Dropdown>
                </Layer>
              </Portal>
            ) : null}
          </>
        )}
      </FlipFlop>
    );
  }
}
