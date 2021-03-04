import { Description, Divider, Grid, Spacer } from "@geist-ui/react";
import React from "react";
import { LARGE_GAP, SMALL_GAP } from "../../src/constants";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  const content = [
    <Description title="Rechtliches" content={<LegalLinks />} />,
    <Description title="Kontakt" content={<ContactLinks />} />,
    <Description title="Unternehmen" content={<CompanyLinks />} />,
    <Description title="Social" content={<SocialLinks />} />,
  ];

  return (
    <footer>
      <Divider />
      <Container>
        <Grid.Container gap={LARGE_GAP}>
          {content.map((_) => (
            <Grid xs={24} sm={12} md={24 / content.length}>
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
