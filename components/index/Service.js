import { Card, Description, Display, Grid } from "@geist-ui/react";
import React from "react";
import InternalLink from "../misc/InternalLink";

const Service = ({ title, content, icon }) => {
  return (
    <Grid xs={24} sm={12} md={8}>
      <InternalLink href="/leistungen" style={{ width: "100%" }}>
        <Card hoverable>
          <Display
            caption={
              <Description
                title={
                  <span style={{ textAlign: "center", width: "100%" }}>
                    {title}
                  </span>
                }
                content={content}
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

export default Service;
