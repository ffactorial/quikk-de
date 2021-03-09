import { Button, Grid, Image, Text } from "@geist-ui/react";
import React from "react";
import { MEDIUM_GAP, XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import InternalLink from "../misc/InternalLink";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          <Grid xs={24} sm={24} md={14} direction="column">
            <Text h1 style={{ lineHeight: 1 }}>
              Software und Webdesign. Individuell. QUIKK.
            </Text>
            <Text type="secondary" style={{ marginTop: 0 }}>
              Wir setzen Ihr Vorhaben in die Tat um. Egal ob professionelle
              Webauftritte,{" "}
              <span style={{ whiteSpace: "nowrap" }}>E-Commerce</span>,
              klassische Softwarelösungen, mobile Apps oder Ihr eigenes,
              individuelles Anliegen.
            </Text>
            <Grid.Container gap={MEDIUM_GAP}>
              <Grid xs={24} sm={24} md={12}>
                <InternalLink href="/kontakt" style={{ width: "100%" }}>
                  <Button type="success" style={{ width: "100%" }}>
                    Anfragen
                  </Button>
                </InternalLink>
              </Grid>
              <Grid xs={24} sm={24} md={12}>
                <InternalLink href="/leistungen" style={{ width: "100%" }}>
                  <Button type="secondary" style={{ width: "100%" }}>
                    Unsere Leistungen
                  </Button>
                </InternalLink>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={0} sm={24} md={10} justify="center">
            <Image
              src={hero}
              alt="QUIKK Software Softwareentwicklung"
              style={{ maxWidth: "300px" }}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Hero;
