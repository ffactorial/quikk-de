import { Grid } from "@geist-ui/react";
import React from "react";
import Hero from "../../components/leistungen/Hero";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import ServicePreview from "../../components/leistungen/ServicePreview";
import apps from "../../assets/images/apps.svg";
import webdesign from "../../assets/images/webdesign.svg";
import server from "../../assets/images/server.svg";
import software from "../../assets/images/software.svg";
import { XTRA_LARGE_GAP, XXL_GAP } from "../../src/constants";
import Container from "../../components/layout/Container";
import ServiceFooter from "../../components/leistungen/ServiceFooter";
import useIsMobile from "../../components/hooks/useIsMobile";

const placeholder =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const services = [
	{
		src: software,
		title: "Software und Tools",
		content:
			"Professionelle und zielgerichtete Entwicklung von Software. Mehr Funktionalität und Unterstützung für Ihren Arbeitsalltag durch eine individuelle Implementierung.",
		href: "/leistungen/softwareentwicklung",
		use: [
			{
				title: "Individualentwicklung",
				content: placeholder,
			},
			{
				title: "Digitalisierung von Geschäftsprozessen",
				content: placeholder,
			},
			{
				title: "Analyse und Auswertung Ihrer Daten",
				content: placeholder,
			},
			{
				title: "Automatisierung täglicher Aufgaben",
				content: placeholder,
			},
			{
				title: "Per Desktop Installation oder im Web",
				content: placeholder,
			},
			{
				title: "Entwicklung von Prototypen",
				content: placeholder,
			},
			{
				title: "Technische Beratung",
				content: placeholder,
			},
			{
				title: "Pflege von bestehenden Lösungen",
				content: placeholder,
			},
		],
	},
	{
		src: webdesign,
		title: "Webdesign und E-Commerce",
		content:
			"Für einen attraktiven und professionellen Auftritt im Web, der Sie und Ihr Unternehmen wiederspiegelt. Mit eBay/mobile.de Integration und SEO.",
		href: "/leistungen/webentwicklung",
		use: [
			{
				title: "Professionell, individuell, einzigartig",
				content: placeholder,
			},
			{
				title: "Eigene Bestell- und Buchungssysteme",
				content: placeholder,
			},
			{
				title: "Vollständige E-Commerce Umsetzung",
				content: placeholder,
			},
			{
				title: "CMS (z.B. Wordpress) Integration",
				content: placeholder,
			},
			{
				title: "Attraktive UI/UX",
				content: placeholder,
			},
			{
				title: "Responsive, HTTPS, SEO, kostenloses Hosting",
				content: placeholder,
			},
		],
	},
	{
		src: apps,
		title: "Mobile Apps",
		content:
			"Sind Sie oft unterwegs oder müssen jederzeit erreichbar sein? Dann muss eine flexible Lösung her: Wir entwickeln Apps für Android und iOS mit Offline Verfügbarkeit.",
		href: "/leistungen/mobile-apps",
		use: [
			{
				title: "Software für die Hosentasche",
				content: placeholder,
			},
			{
				title: "Zeit- und ortsunabhängig",
				content: placeholder,
			},
			{
				title: "Für Android und iOS",
				content: placeholder,
			},
			{
				title: "Offline Support",
				content: placeholder,
			},
			{
				title: "Intuitive Bedienung",
				content: placeholder,
			},
		],
	},
	{
		src: server,
		title: "Datenbanken, Server und APIs",
		content:
			"Sie möchten Ihre Anwendungen miteinander verbinden, Inhalte in Datenbanken speichern oder neue Schnittstellen entwickeln lassen? Wir helfen Ihnen dabei.",
		href: "/leistungen/backend",
		use: [
			{
				title: "Ganzheitliche Lösungen",
				content: placeholder,
			},
			{
				title: "Ressourcenverwaltung",
				content: placeholder,
			},
			{
				title: "Eigene Datenbankentwicklung",
				content: placeholder,
			},
			{
				title: "Schnittstellenanbindung",
				content: placeholder,
			},
			{
				title: "Datenaustausch",
				content: placeholder,
			},
		],
	},
];

const leistungen = () => {
	const isMobile = useIsMobile();
	const title =
		"Die perfekte Ergänzung: Individuelle Software & attraktives Webdesign.";
	const desc =
		"Mit unseren auf Sie zugeschnittenen Lösungen unterstützen wir Sie dabei, Ihren Arbeitsalltag effizienter zu gestalten und digitale Herausforderungen zu meistern.";

	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Hero title={title} subtitle={desc} />
			<Container
				spacing
				style={{
					marginTop: `${isMobile ? 0 : XTRA_LARGE_GAP}em`,
					marginBottom: `${isMobile ? 0 : XTRA_LARGE_GAP}em`,
				}}
			>
				<Grid.Container gap={XXL_GAP} alignItems="center">
					{services.map((service, i) => (
						<ServicePreview {...service} revert={!!(i % 2)} key={i} />
					))}
				</Grid.Container>
			</Container>
			<ServiceFooter />
		</>
	);
};

export default leistungen;
