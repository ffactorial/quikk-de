import { Card, Description, Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";

const CarrerCard = ({ title, subtitle, content }) => {
  const theme = useTheme();

  return (
    <Grid xs={24} sm={12} md={8}>
      <Card style={{ height: "100%" }}>
        <Description
          title={
            <Text h3 style={{ color: theme.palette.foreground }}>
              {title}
            </Text>
          }
          content={
            <Text style={{ color: theme.palette.secondary }}>{subtitle}</Text>
          }
        />
        <Text p>{content}</Text>
      </Card>
    </Grid>
  );
};

export default CarrerCard;
