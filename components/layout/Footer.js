import {
	Description,
	Divider,
	GeistProvider,
	Grid,
	Text,
	useTheme,
} from "@geist-ui/react";
import React from "react";
import {
	ID_MOBILE_APPS,
	ID_SOFTWARE,
	ID_WEBDESIGN_AND_ECOMMERCE,
	MEDIUM_GAP,
} from "../../src/constants";
import LocationLinks from "./footer/LocationLinks";
import Container from "./Container";
import LegalLinks from "./footer/LegalLinks";
import ContactLinks from "./footer/ContactLinks";
import CompanyLinks from "./footer/CompanyLinks";
import SocialLinks from "./footer/SocialLinks";
import { QUIKK_dark, QUIKK_light } from "../../styles/themes";
import InternalLink from "../misc/InternalLink";
import ExternalLink from "../misc/ExternalLink";
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
					<ExternalLink href="https://g.page/quikk?share">
						<LocationLinks />
					</ExternalLink>
				</SanitizeContent>
			}
		/>,
	];

	const AddText = () =>
		!isMobile && (
			<SanitizeContent>
				<Text small>
					Wir bei QUIKK Software & Webdesign UG (haftungsbeschr??nkt) entwickeln
					seit Oktober 2020{" "}
					<InternalLink href={`/leistungen/${ID_SOFTWARE}`}>
						individuelle Software
					</InternalLink>
					,{" "}
					<InternalLink href={`/leistungen/${ID_WEBDESIGN_AND_ECOMMERCE}`}>
						attraktive Webdesigns
					</InternalLink>{" "}
					und{" "}
					<InternalLink href={`/leistungen/${ID_MOBILE_APPS}`}>
						mobile Apps
					</InternalLink>{" "}
					in Minden und liefern Ihnen{" "}
					<InternalLink href="/leistungen">
						ma??geschneiderte L??sungen
					</InternalLink>{" "}
					f??r digitale Herausforderungen. Wir sind ein junges und agiles
					Tech-Startup mit Fokus auf Qualit??t und Transparenz.
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
								title={`?? 2020-${new Date().getFullYear()} QUIKK Software`}
							/>
						}
					/>
				</Container>
			</footer>
		</GeistProvider>
	);
};

export default Footer;
