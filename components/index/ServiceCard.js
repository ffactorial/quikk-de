import { Card, Description, Display, Grid, Text } from "@geist-ui/react";
import React from "react";
import InternalLink from "../misc/InternalLink";

const ServiceCard = ({ title, content, icon }) => {
  return (
    <Grid xs={24} sm={12} md={8}>
      <InternalLink href="/leistungen" style={{ width: "100%" }}>
        <Card hoverable>
          <Display
            caption={
              <Description
                title={
                  <Text b style={{ textAlign: "center", width: "100%" }}>
                    {title}
                  </Text>
                }
                content={
                  <Text style={{ fontWeight: "normal" }}>{content}</Text>
                }
                style={{ textAlign: "center" }}
              />
            }
          >
            {React.cloneElement(icon, {
              size: 42,
            })}
          </Display>
        </Card>
      </InternalLink>
    </Grid>
  );
};

export default ServiceCard;
