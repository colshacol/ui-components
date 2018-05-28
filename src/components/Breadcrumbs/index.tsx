import * as React from "react";
import { styled } from "typestyle-react";
import { LocationDescriptor } from "../../routing";
import { COLORS } from "../../styles";
import { Fragment } from "../Fragment";
import { LocationLink } from "../LocationLink";

export interface CrumbProps {
  location?: LocationDescriptor;
  text: string;
}

export interface Props {
  crumbs: CrumbProps[];
}

export class Breadcrumbs extends React.PureComponent<Props> {
  public render() {
    const { crumbs } = this.props;
    return (
      <Wrapper>
        {crumbs.map((c, i) => (
          <Fragment key={i}>
            <Crumb>
              {c.location !== undefined ? (
                <LocationLink location={c.location} presentation="text">
                  {c.text}
                </LocationLink>
              ) : (
                c.text
              )}
            </Crumb>
            {i < crumbs.length - 1 ? <Slash>/</Slash> : null}
          </Fragment>
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  color: COLORS.i60,
  display: "flex",
  fontSize: "inherit",
  fontWeight: "inherit",
  minWidth: 0
});

const Crumb = styled("span", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});

const Slash = styled("span", {
  margin: "0 8px"
});
