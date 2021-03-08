import { Grid, Spacer, useTheme } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import ServiceCard from "./ServiceCard";
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
import Title from "../misc/Title";

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Software",
      content:
        "Maßgeschneiderte Softwarelösungen als Desktop- und Webanwendung.",
      icon: <Code />,
    },
    {
      title: "Fullstack",
      content:
        "Ganzheitliche Lösungen bestehend aus Nutzeroberfläche, Server und Datenbank.",
      icon: <Server />,
    },
    {
      title: "Mobile Apps",
      content: "Software für die Hosentasche. Mobile Apps für Android und iOS.",
      icon: <Smartphone />,
    },
    {
      title: "APIs",
      content: "Schnittstellen für eine einfache Anbindung an Ihre Systeme.",
      icon: <GridIcon />,
    },
    {
      title: "Integration",
      content: "Anwendungen automatisiert verbinden und Zeit sparen.",
      icon: <LogIn />,
    },
    {
      title: "Prototyping",
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
      title: "SEO",
      content:
        "Lassen Sie sich in den Weiten des World Wide Webs besser finden.",
      icon: <Search />,
    },
    {
      title: "Agilität",
      content:
        "Erste Ergebnisse liegen bereits nach einem 2-wöchigen Sprint vor.",
      icon: <FastForward />,
    },
  ];

  return (
    <section
      style={{
        background: theme.palette.accents_1,
        borderTop: `1px solid ${theme.palette.accents_2}`,
        borderBottom: `1px solid ${theme.palette.accents_2}`,
      }}
    >
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          <Grid xs={24}>
            <Title title="Unser Fokus" />
          </Grid>
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Services;
