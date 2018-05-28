import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Avatar } from "../";
import { COLORS } from "../../../styles";

storiesOf(Avatar.name, module)
  .add("Default", () => <Avatar url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c" />)
  .add("Custom size", () => <Avatar size={64} url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c" />)
  .add("Presence color", () => (
    <Avatar presenceColor={COLORS.green} url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c" />
  ))
  .add("Presence border color", () => (
    <Purple>
      <Avatar
        borderColor={COLORS.purple}
        presenceColor={COLORS.yellow}
        url="https://secure.gravatar.com/avatar/73678eabd75c4b5e736a24214cf1ec7c"
      />
    </Purple>
  ));

const Purple: React.StatelessComponent = ({ children }) => (
  <span
    style={{
      backgroundColor: COLORS.purple,
      display: "inline-flex",
      padding: "8px"
    }}
  >
    {children}
  </span>
);
