import { Description, Divider, Grid, Spacer } from "@geist-ui/react";
import React from "react";
import { LARGE_GAP, MEDIUM_GAP, SMALL_GAP } from "../../src/constants";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  const SanitizeFontWeight = ({ children }) => (
    <div style={{ fontWeight: 400 }}>{children}</div>
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
  ];

  return (
    <footer>
      <Spacer y={MEDIUM_GAP} />
      <Container>
        <Grid.Container gap={LARGE_GAP}>
          {content.map((_, i) => (
            <Grid key={i} xs={24} sm={12} md={24 / content.length}>
              {_}
            </Grid>
          ))}
          <Grid xs={24}>
            <Description title={<>© {new Date().getFullYear()} QUIKK</>} />
          </Grid>
        </Grid.Container>
        <Spacer y={SMALL_GAP} />
      </Container>
    </footer>
  );
};

export default Footer;
