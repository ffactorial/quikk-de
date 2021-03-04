import { Grid } from "@geist-ui/react";
import React from "react";
import { SMALL_GAP } from "../../../src/constants";

const Links = ({ content }) => {
  return (
    <Grid.Container gap={SMALL_GAP}>
      {content.map((_, i) => (
        <Grid key={i} xs={24}>
          {_}
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Links;
