import { GeistProvider, Grid, Image, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import InternalLink from "../misc/InternalLink";
import Container from "./Container";
import { Spacing } from "./header/ResponsiveUtils";
import DesktopNavBar from "./header/DesktopNavBar";
import MobileNavBar from "./header/MobileNavBar";
import { QUIKK_dark, QUIKK_light } from "../../styles/themes";

const Header = () => {
  const theme = useTheme();

  const pathnames = {
    Home: "/",
    Leistungen: "/leistungen",
    Projekte: "/projekte",
    Team: "/team",
    Kontakt: "/kontakt",
  };

  return (
    <GeistProvider themes={[QUIKK_light, QUIKK_dark]} themeType="QUIKK_dark">
      <header
        style={{
          background: theme.palette.foreground,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 99,
        }}
      >
        <Spacing />
        <Container>
          <Grid.Container gap={0} justify="space-between" alignItems="center">
            <Grid>
              <InternalLink href="/">
                {/* <Image alt="QUIKK Software" src={quikk_logo} /> */}
                <Text h3 style={{ margin: 0, color: theme.palette.background }}>
                  QUIKK
                </Text>
              </InternalLink>
            </Grid>
            <Grid>
              <DesktopNavBar pathnames={pathnames} />
              <MobileNavBar pathnames={pathnames} />
            </Grid>
          </Grid.Container>
        </Container>
        <Spacing />
      </header>
    </GeistProvider>
  );
};

export default Header;
