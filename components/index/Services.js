import { Divider, Grid, Spacer, Text, useTheme } from "@geist-ui/react";
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
import TitleAndSubtitle from "../misc/TitleAndSubtitle";

const Services = () => {
  const theme = useTheme();

  const services = [
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
    <section>
      <Spacer y={XTRA_LARGE_GAP} />
      <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
        <TitleAndSubtitle title="Unser Fokus" subtitle="Was wir bieten" />
      </Grid.Container>
      <Container>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </Grid.Container>
      </Container>
      <Spacer y={XTRA_LARGE_GAP} />
    </section>
  );
};

export default Services;
