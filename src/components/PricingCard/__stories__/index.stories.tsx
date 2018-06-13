import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PricingCard } from "../";

storiesOf(PricingCard.name, module).add("Example", () => (
  <PricingCard
    features={["Unlimited projects", "Unlimited users", "Unlimited integrations", "Unlimited usage", "All features"]}
    price={7900}
  />
));
