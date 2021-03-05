import { Description, Divider, Grid, Spacer, useTheme } from "@geist-ui/react";
import React from "react";
import { LARGE_GAP, MEDIUM_GAP } from "../../src/constants";
import LocationLinks from "./footer/LocationLinks";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  const theme = useTheme();

  const SanitizeFontWeight = ({ children }) => (
    <span style={{ fontWeight: "normal" }}>{children}</span>
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
    <footer>
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
        <Description title={<>© {new Date().getFullYear()} QUIKK Software</>} />
        <Spacer y={MEDIUM_GAP} />
      </Container>
    </footer>
  );
};

export default Footer;
