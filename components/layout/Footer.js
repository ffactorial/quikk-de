import {
  CssBaseline,
  Description,
  Divider,
  GeistProvider,
  Grid,
  Spacer,
  Text,
  useTheme,
} from "@geist-ui/react";
import React from "react";
import { LARGE_GAP, MEDIUM_GAP } from "../../src/constants";
import LocationLinks from "./footer/LocationLinks";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";
import { QUIKK_dark, QUIKK_light } from "../../styles/themes";

const Footer = () => {
  const theme = useTheme();

  const SanitizeFontWeight = ({ children }) => (
    <Text style={{ fontWeight: "normal" }}>{children}</Text>
  );

  const content = [
    <Description
      title="Rechtliches"
      content={
        <SanitizeFontWeight>
          <LegalLinks />
        </SanitizeFontWeight>
      }
    />,
    <Description
      title="Kontakt"
      content={
        <SanitizeFontWeight>
          <ContactLinks />
        </SanitizeFontWeight>
      }
    />,
    <Description
      title="Unternehmen"
      content={
        <SanitizeFontWeight>
          <CompanyLinks />
        </SanitizeFontWeight>
      }
    />,
    <Description
      title="Social"
      content={
        <SanitizeFontWeight>
          <SocialLinks />
        </SanitizeFontWeight>
      }
    />,
    <Description
      title="Vor Ort"
      content={
        <SanitizeFontWeight>
          <LocationLinks />
        </SanitizeFontWeight>
      }
    />,
  ];

  return (
    <GeistProvider themes={[QUIKK_light, QUIKK_dark]} themeType="QUIKK_dark">
      <footer style={{ background: theme.palette.foreground }}>
        <Spacer y={MEDIUM_GAP} />
        <Container>
          <Grid.Container gap={LARGE_GAP}>
            {content.map((_, i) => (
              <Grid key={i} xs={12} sm={12} md={24 / content.length}>
                {_}
              </Grid>
            ))}
          </Grid.Container>
          <Divider />
          <Description title={`© ${new Date().getFullYear()} QUIKK Software`} />
          <Spacer y={MEDIUM_GAP} />
        </Container>
      </footer>
    </GeistProvider>
  );
};

export default Footer;
