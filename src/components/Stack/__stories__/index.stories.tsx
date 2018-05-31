import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Stack } from "../";
import { SubtleButton } from "../../SubtleButton";

storiesOf(Stack.name, module).add("Default (push + pop)", () => (
  <Stack>
    {({ push, pop }) => (
      <div>
        <h1>Page 1</h1>
        <p>
          <SubtleButton
            onClick={() => {
              push(
                <div>
                  <h1>Page 1.1</h1>
                  <p>
                    <SubtleButton
                      onClick={() => {
                        push(
                          <div>
                            <h1>Page 1.1.1</h1>
                            <p>
                              <SubtleButton onClick={pop}>Back</SubtleButton>
                            </p>
                          </div>
                        );
                      }}
                    >
                      1.1.1
                    </SubtleButton>
                  </p>
                  <p>
                    <SubtleButton
                      onClick={() => {
                        push(
                          <div>
                            <h1>Page 1.1.2</h1>
                            <SubtleButton onClick={pop}>Back</SubtleButton>
                          </div>
                        );
                      }}
                    >
                      1.1.2
                    </SubtleButton>
                  </p>
                  <p>
                    <SubtleButton onClick={pop}>Back</SubtleButton>
                  </p>
                </div>
              );
            }}
          >
            1.1
          </SubtleButton>
        </p>
        <p>
          <SubtleButton
            onClick={() => {
              push(
                <div>
                  <h1>Page 1.2</h1>
                  <p>
                    <SubtleButton
                      onClick={() => {
                        push(
                          <div>
                            <h1>Page 1.2.1</h1>
                            <p>
                              <SubtleButton onClick={pop}>Back</SubtleButton>
                            </p>
                          </div>
                        );
                      }}
                    >
                      1.2.1
                    </SubtleButton>
                  </p>
                  <p>
                    <SubtleButton
                      onClick={() => {
                        push(
                          <div>
                            <h1>Page 1.2.2</h1>
                            <p>
                              <SubtleButton onClick={pop}>Back</SubtleButton>
                            </p>
                          </div>
                        );
                      }}
                    >
                      1.2.2
                    </SubtleButton>
                  </p>
                  <p>
                    <SubtleButton onClick={pop}>Back</SubtleButton>
                  </p>
                </div>
              );
            }}
          >
            1.2
          </SubtleButton>
        </p>
      </div>
    )}
  </Stack>
));
