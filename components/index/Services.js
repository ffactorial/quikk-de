import { Divider, Grid, Spacer, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import Service from "./Service";
import {
  Layout,
  Search,
  Server,
  Smartphone,
  Code,
  LogIn,
  Grid as GridIcon,
  FastForward,
  Compass,
} from "@geist-ui/react-icons";

const Services = () => {
  const theme = useTheme();

  const content = [
    {
      title: "Softwareentwicklung",
      content: "Maßgeschneiderte Software als Desktop- und Webanwendung.",
      icon: <Code />,
    },
    {
      title: "Fullstack Anwendungen",
      content: "Nutzeroberflächen gepaart mit einem ganzheitlichen Backend.",
      icon: <Server />,
    },
    {
      title: "Mobile Apps",
      content: "Software für die Hosentasche. Mobile Apps für Android und iOS.",
      icon: <Smartphone />,
    },
    {
      title: "Programmierschnittstellen",
      content: "Schnittstellen für eine einfache Anbindung an Ihre Systeme.",
      icon: <GridIcon />,
    },
    {
      title: "Integration",
      content: "Anwendungen automatisiert verbinden und Zeit sparen.",
      icon: <LogIn />,
    },
    {
      title: "Proof of Concepts",
      content:
        "Wir überprüfen und bestätigen die Durchführbarkeit Ihres Vorhabens.",
      icon: <Compass />,
    },
    {
      title: "Webdesign",
      content: "Ein Webauftritt, der genauso einzigartig ist, wie Sie selbst.",
      icon: <Layout />,
    },
    {
      title: "Suchmaschinenoptimierung",
      content:
        "Lassen Sie sich in den Weiten des World Wide Webs besser finden.",
      icon: <Search />,
    },
    {
      title: "Agile Vorgehensweise",
      content:
        "Erste Ergebnisse liegen bereits nach einem 2-wöchigen Sprint vor.",
      icon: <FastForward />,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: theme.palette.accents_1,
        borderTop: `1px solid ${theme.palette.accents_2}`,
        borderBottom: `1px solid ${theme.palette.accents_2}`,
      }}
    >
      <Spacer y={XTRA_LARGE_GAP} />
      <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
        <Grid xs={24} direction="column">
          <Text h2 style={{ width: "100%", textAlign: "center" }}>
            Unser Fokus
          </Text>
          <Divider type="success">WAS WIR BIETEN</Divider>
        </Grid>
      </Grid.Container>
      <Container>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          {content.map(({ title, content, href, icon }, i) => (
            <Service key={i} {...{ title, content, href, icon }} />
          ))}
        </Grid.Container>
      </Container>
      <Spacer y={XTRA_LARGE_GAP} />
    </section>
  );
};

export default Services;
