import { Grid } from "@geist-ui/react";
import React from "react";
import Hero from "../../components/leistungen/Hero";
import WorkProcess from "../../components/leistungen/WorkProcess";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import Technologies from "../../components/leistungen/Technologies";
import ServicePreview from "../../components/leistungen/ServicePreview";
import apps from "../../assets/images/apps.svg";
import webdesign from "../../assets/images/webdesign.svg";
import server from "../../assets/images/server.svg";
import software from "../../assets/images/software.svg";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../../components/layout/Container";

export const services = [
	{
		src: software,
		title: "Software und Tools",
		content:
			"Professionelle und zielgerichtete Entwicklung von Software. Mehr Funktionalität und Unterstützung für Ihren Arbeitsalltag durch eine individuelle Implementierung.",
		href: "/leistungen/softwareentwicklung",
	},
	{
		src: apps,
		title: "Mobile Apps",
		content:
			"Sind Sie oft unterwegs oder müssen jederzeit erreichbar sein? Dann muss eine flexible Lösung her: Wir entwickeln Apps für Android und iOS mit Offline Verfügbarkeit.",
		href: "/leistungen/mobile-apps",
	},
	{
		src: webdesign,
		title: "Webdesign und E-Commerce",
		content:
			"Für einen attraktiven und professionellen Auftritt im Web, der Sie und Ihr Unternehmen wiederspiegelt. Mit eBay/mobile.de Integration und SEO.",
		href: "/leistungen/webentwicklung",
	},
	{
		src: server,
		title: "Datenbank, Server und APIs",
		content:
			"Sie möchten Ihre Anwendungen miteinander verbinden, Inhalte in Datenbanken speichern oder neue Schnittstellen entwickeln lassen? Wir helfen Ihnen dabei.",
		href: "/leistungen/backend",
	},
];

const leistungen = () => {
	const title =
		"Die perfekte Ergänzung: Individuelle Software & attraktives Webdesign.";
	const desc =
		"Mit unseren auf Sie zugeschnittenen Lösungen unterstützen wir Sie dabei, Ihren Arbeitsalltag effizienter zu gestalten und digitale Herausforderungen zu meistern.";

	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Hero title={title} subtitle={desc} />
			<Container spacing>
				<Grid.Container gap={XTRA_LARGE_GAP * 2} alignItems="center">
					{services.map((service, i) => (
						<ServicePreview {...service} revert={i % 2 !== 0} key={i} />
					))}
				</Grid.Container>
			</Container>
			<WorkProcess />
			<Technologies />
		</>
	);
};

export default leistungen;
