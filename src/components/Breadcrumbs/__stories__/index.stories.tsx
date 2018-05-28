import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Breadcrumbs } from "../";

storiesOf(Breadcrumbs.name, module)
  .add("Default", () => (
    <Breadcrumbs crumbs={[{ text: "Projects" }, { text: "Customer Feedback" }, { text: "Email from Benjamin" }]} />
  ))
  .add("Links", () => (
    <Breadcrumbs
      crumbs={[
        { text: "Home", location: { internal: false, url: "/" } },
        { text: "Projects", location: { internal: false, url: "/projects" } },
        { text: "Customer Feedback" }
      ]}
    />
  ))
  .add("Inherited font styles", () => (
    <div style={{ fontSize: "12px", fontWeight: 600 }}>
      <Breadcrumbs
        crumbs={[
          { text: "Home", location: { internal: false, url: "/" } },
          { text: "Projects", location: { internal: false, url: "/projects" } },
          { text: "Customer Feedback" }
        ]}
      />
    </div>
  ));
