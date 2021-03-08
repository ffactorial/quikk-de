import { Card, Description, Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";
import ExternalLink from "../misc/ExternalLink";

const CarrerCard = ({ title, subtitle, content }) => {
  const theme = useTheme();

  return (
    <Grid xs={24} sm={12} md={8}>
      <ExternalLink
        href={`mailto:info@quikk.de?subject=${`Bewerbung ${title} ${subtitle}`}`}
        icon={false}
      >
        <Card hoverable style={{ height: "100%" }}>
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
          <Text p type="secondary">
            {content}
          </Text>
        </Card>
      </ExternalLink>
    </Grid>
  );
};

export default CarrerCard;
