import { Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import InternalLink from "../misc/InternalLink";
import Container from "./Container";
import { Spacing } from "./header/ResponsiveUtils";
import DesktopNavBar from "./header/DesktopNavBar";
import MobileNavBar from "./header/MobileNavBar";

const Header = () => {
  const theme = useTheme();

  const pathnames = {
    Home: "/",
    Leistungen: "/leistungen",
    Projekte: "/projekte",
    Blog: "/blog",
    "Über uns": "/wir",
    Kontakt: "/kontakt",
  };

  return (
    <header style={{ borderBottom: `1px solid ${theme.palette.accents_2}` }}>
      <Spacing />
      <Container>
        <Grid.Container
          gap={MEDIUM_GAP}
          justify="space-between"
          alignItems="center"
        >
          <Grid>
            <Text p style={{ margin: 0, fontWeight: 600 }}>
              <InternalLink href="/">QUIKK</InternalLink>
            </Text>
          </Grid>
          <Grid>
            <DesktopNavBar pathnames={pathnames} />
            <MobileNavBar pathnames={pathnames} />
          </Grid>
        </Grid.Container>
      </Container>
      <Spacing />
    </header>
  );
};

export default Header;
