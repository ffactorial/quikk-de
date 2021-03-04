import { Spacer } from "@geist-ui/react";
import React from "react";
import { XTRA_SMALL_GAP } from "../../src/constants";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

const style = {
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const WithIcon = ({ icon, children }) => (
  <>
    {React.cloneElement(icon, { size: "1em" })}
    <Spacer x={XTRA_SMALL_GAP} y={0} />
    {children}
  </>
);

export const ExternalLinkWithIcon = ({ href = "", icon, children }) => (
  <ExternalLink href={href} style={style.link}>
    <WithIcon icon={icon}>{children}</WithIcon>
  </ExternalLink>
);

export const InternalLinkWithIcon = ({ href = "", icon, children }) => (
  <InternalLink href={href} style={style.link}>
    <WithIcon icon={icon}>{children}</WithIcon>
  </InternalLink>
);
