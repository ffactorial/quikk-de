import { Grid, Spacer, useTheme } from "@geist-ui/react";
import React from "react";
import {
	ID_DATABASES_SERVERS_AND_APIS,
	ID_MOBILE_APPS,
	ID_SOFTWARE,
	ID_WEBDESIGN_AND_ECOMMERCE,
	XTRA_LARGE_GAP,
} from "../../src/constants";
import Container from "../layout/Container";
import ServiceCard from "./ServiceCard";
import {
	Layout,
	Search,
	Server,
	Smartphone,
	Code,
	ShoppingBag,
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
			id: ID_SOFTWARE,
		},
		{
			title: "Fullstack",
			content: "Anwendungen mit Nutzeroberfläche, Server und Datenbank.",
			icon: <Server />,
			id: ID_SOFTWARE,
		},
		{
			title: "Mobile Apps",
			content: "Software für die Hosentasche. Mobile Apps für Android und iOS.",
			icon: <Smartphone />,
			id: ID_MOBILE_APPS,
		},
		{
			title: "APIs",
			content: "Schnittstellen für eine einfache Kommunikation Ihrer Systeme.",
			icon: <GridIcon />,
			id: ID_DATABASES_SERVERS_AND_APIS,
		},
		{
			title: "E-Commerce",
			content:
				"Eigene Bestell- und Buchungssysteme sowie eBay/mobile.de Anbindung.",
			icon: <ShoppingBag />,
			id: ID_WEBDESIGN_AND_ECOMMERCE,
		},
		{
			title: "Prototyping",
			content:
				"Wir überprüfen und bestätigen die Durchführbarkeit Ihres Vorhabens.",
			icon: <Compass />,
			id: ID_SOFTWARE,
		},
		{
			title: "Webdesign",
			content: "Ein Webauftritt, der genauso einzigartig ist, wie Sie selbst.",
			icon: <Layout />,
			id: ID_WEBDESIGN_AND_ECOMMERCE,
		},
		{
			title: "SEO",
			content:
				"Lassen Sie sich in den Weiten des World Wide Webs besser finden.",
			icon: <Search />,
			id: ID_WEBDESIGN_AND_ECOMMERCE,
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
