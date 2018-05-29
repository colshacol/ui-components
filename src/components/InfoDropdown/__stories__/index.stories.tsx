import { storiesOf } from "@storybook/react";
import * as React from "react";
import { InfoDropdown } from "../";

storiesOf(InfoDropdown.name, module).add("Default", () => (
  <div style={{ display: "flex" }}>
    <InfoDropdown
      info={[
        {
          label: "Dimensions",
          value: "1369px x 1158px"
        },
        {
          label: "Filename",
          value: "funnycat.jpg"
        },
        {
          label: "Location",
          value: "US East"
        },
        {
          label: "Size",
          value: "562kb"
        },
        {
          label: "Type",
          value: "image/jpg"
        },
        {
          label: "Uploaded",
          value: "10:04am May 29 2018"
        }
      ]}
    />
  </div>
));
