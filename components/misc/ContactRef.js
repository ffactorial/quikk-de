import { Button, Grid, Text, useTheme } from "@geist-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import useIsMobile from "../hooks/useIsMobile";
import Container from "../layout/Container";
import InternalLink from "./InternalLink";
import Title from "./Title";

const ContactRef = () => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useIsMobile();
	const excludePathnames = ["/kontakt", "/impressum", "/datenschutzerklaerung"];
	const displayContactRef = excludePathnames.every(
		(pathname) => pathname !== router.pathname,
	);

	const Cta = () => (
		<InternalLink href="/kontakt" style={{ width: isMobile ? "100%" : null }}>
			<Button type="success" style={{ width: isMobile ? "100%" : null }}>
				Zum Kontaktformular
			</Button>
		</InternalLink>
	);

	return (
		displayContactRef && (
			<section style={{ backgroundColor: theme.palette.accents_1 }}>
				<Container spacing>
					<Grid.Container
						gap={XTRA_LARGE_GAP}
						alignItems="center"
						justify="center"
					>
						<Grid
							xs={24}
							sm={24}
							md
							alignItems="center"
							justify="center"
							direction="column"
						>
							<Title title="Noch Fragen?" centered={false} />
							<Text
								type="secondary"
								p
								style={{ marginBottom: isMobile ? null : 0, width: "100%" }}
							>
								Kein Problem! In einem kostenlosen Erstgespräch am Telefon oder
								über Microsoft Teams lernen wir uns kennen und erarbeiten
								gemeinsam mit Ihnen ein Lösungskonzept für Ihre Ziele.
							</Text>
							{isMobile && <Cta />}
						</Grid>
						<Grid xs={24} sm={24} md alignItems="center" justify="center">
							{!isMobile && <Cta />}
						</Grid>
					</Grid.Container>
				</Container>
			</section>
		)
	);
};

export default ContactRef;
