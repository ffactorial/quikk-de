import React from "react";
import { Grid, Spacer } from "@geist-ui/react";
import { MEDIUM_GAP, XTRA_SMALL_GAP } from "../../../src/constants";

export const HideOnMobile = ({ children }) => (
  <Grid xs={0} sm={0} md>
    {children}
  </Grid>
);

export const ShowOnMobile = ({ children }) => (
  <Grid xs sm md={0}>
    {children}
  </Grid>
);

export const Spacing = () => (
  <>
    <HideOnMobile>
      <Spacer y={MEDIUM_GAP} />
    </HideOnMobile>
    <ShowOnMobile>
      <Spacer y={XTRA_SMALL_GAP} />
    </ShowOnMobile>
  </>
);
