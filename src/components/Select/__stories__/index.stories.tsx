import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Select } from "../";

storiesOf(Select.name, module)
  .add("Default", () => (
    <Select
      defaultText="Choose group"
      onSelect={() => {}}
      options={[
        { text: "Performance", value: "performance", selected: false },
        { text: "Usability", value: "usability", selected: false },
        { text: "Navigation", value: "navigation", selected: false },
        { text: "Reliability", value: "reliability", selected: false },
        { text: "Features", value: "features", selected: false }
      ]}
    />
  ))
  .add("Custom height", () => (
    <Select
      defaultText="Choose group"
      height={32}
      onSelect={() => {}}
      options={[
        { text: "Performance", value: "performance", selected: false },
        { text: "Usability", value: "usability", selected: false },
        { text: "Navigation", value: "navigation", selected: false },
        { text: "Reliability", value: "reliability", selected: false },
        { text: "Features", value: "features", selected: false }
      ]}
    />
  ))
  .add("Disabled", () => (
    <Select
      disabled
      height={32}
      onSelect={() => {}}
      options={[
        { text: "Performance", value: "performance", selected: false },
        { text: "Usability", value: "usability", selected: false },
        { text: "Navigation", value: "navigation", selected: false },
        { text: "Reliability", value: "reliability", selected: false },
        { text: "Features", value: "features", selected: false }
      ]}
    />
  ))
  .add("Long options", () => (
    <Select
      defaultText="Group"
      height={32}
      onSelect={() => {}}
      options={[
        {
          text:
            "Dunedin is a city in New Zealand, at the head of Otago Harbour on the South Island’s southeast coast. It's known for its Scottish and Maori heritage, Victorian and Edwardian architecture, and a large student population. Hiking and cycling trails crisscross the dramatic landscape of the adjoining Otago Peninsula, home to colonies of albatross, sea lions and rare yellow-eyed penguins.",
          value: "dunedin",
          selected: true
        },
        {
          text:
            "Christchurch, known for its English heritage, is located on the east coast of New Zealand’s South Island. Flat-bottomed punts glide on the Avon River, which meanders through the city centre. On its banks are cycling paths, the green expanse of Hagley Park and Christchurch Botanic Gardens. In 2010 and 2011, earthquakes destroyed many of the historic centre's stone-built buildings.",
          value: "christchurch",
          selected: false
        },
        {
          text:
            "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns. There's bungee jumping off Kawarau Gorge Suspension Bridge and jet-boating on the Shotover and Dart rivers. In winter, there's skiing on the slopes of The Remarkables and Coronet Peak.",
          value: "queenstown",
          selected: false
        }
      ]}
    />
  ));
