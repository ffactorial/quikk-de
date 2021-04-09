import {
	Description,
	Divider,
	GeistProvider,
	Grid,
	Text,
	useTheme,
} from "@geist-ui/react";
import React, { useEffect, useState } from "react";
import { MEDIUM_GAP } from "../../src/constants";
import LocationLinks from "./footer/LocationLinks";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";
import { QUIKK_dark, QUIKK_light } from "../../styles/themes";
import InternalLink from "../misc/InternalLink";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
	const theme = useTheme();
	const isMobile = useIsMobile();

	const SanitizeHeading = ({ title = "" }) => (
		<Text b style={{ color: theme.palette.accents_3 }}>
			{title}
		</Text>
	);
	const SanitizeContent = ({ children }) => (
		<Text style={{ fontWeight: "normal", color: theme.palette.background }}>
			{children}
		</Text>
	);

	const content = [
		<Description
			title={<SanitizeHeading title="Rechtliches" />}
			content={
				<SanitizeContent>
					<LegalLinks />
				</SanitizeContent>
			}
		/>,
		<Description
			title={<SanitizeHeading title="Kontakt" />}
			content={
				<SanitizeContent>
					<ContactLinks />
				</SanitizeContent>
			}
		/>,
		<Description
			title={<SanitizeHeading title="Unternehmen" />}
			content={
				<SanitizeContent>
					<CompanyLinks />
				</SanitizeContent>
			}
		/>,
		<Description
			title={<SanitizeHeading title="Social" />}
			content={
				<SanitizeContent>
					<SocialLinks />
				</SanitizeContent>
			}
		/>,
		<Description
			title={<SanitizeHeading title="Vor Ort" />}
			content={
				<SanitizeContent>
					<LocationLinks />
				</SanitizeContent>
			}
		/>,
	];

	const AddText = () =>
		!isMobile && (
			<SanitizeContent>
				<Text small>
					Wir bei QUIKK Software & Webdesign UG (haftungsbeschränkt) entwickeln
					seit Oktober 2020{" "}
					<InternalLink href="/leistungen/softwareentwicklung">
						individuelle Software
					</InternalLink>
					,{" "}
					<InternalLink href="/leistungen/mobile-apps">
						mobile Apps
					</InternalLink>{" "}
					und{" "}
					<InternalLink href="/leistungen/webentwicklung">
						attraktive Webdesigns
					</InternalLink>{" "}
					in Minden und liefern Ihnen maßgeschneiderte Lösungen für digitale
					Herausforderungen. Wir sind ein junges und agiles Tech-Startup mit
					Fokus auf Qualität und Transparenz.
				</Text>
			</SanitizeContent>
		);

	return (
		<GeistProvider themes={[QUIKK_light, QUIKK_dark]} themeType="QUIKK_dark">
			<footer style={{ background: theme.palette.foreground }}>
				<Container spacing>
					<Grid.Container gap={MEDIUM_GAP}>
						{content.map((_, i) => (
							<Grid key={i} xs={12} sm={12} md={24 / content.length}>
								{_}
							</Grid>
						))}
					</Grid.Container>
					<Divider />
					<AddText />
					<Description
						title={
							<SanitizeHeading
								title={`© 2020-${new Date().getFullYear()} QUIKK Software`}
							/>
						}
					/>
				</Container>
			</footer>
		</GeistProvider>
	);
};

export default Footer;
