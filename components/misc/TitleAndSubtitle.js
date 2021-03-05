import { Divider, Grid, Text } from "@geist-ui/react";
import React from "react";

const TitleAndSubtitle = ({ title = "", subtitle = "" }) => {
  return (
    <Grid xs={24} direction="column">
      <Text h2 style={{ width: "100%", textAlign: "center" }}>
        {title}
      </Text>
      <Divider type="success">{subtitle.toUpperCase()}</Divider>
    </Grid>
  );
};

export default TitleAndSubtitle;
