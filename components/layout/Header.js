import { GeistProvider, Grid, Spacer, Text, useTheme } from "@geist-ui/react";
import React, { useEffect, useState } from "react";
import InternalLink from "../misc/InternalLink";
import Container from "./Container";
import DesktopNavBar from "./header/DesktopNavBar";
import MobileNavBar from "./header/MobileNavBar";
import { QUIKK_dark, QUIKK_light } from "../../styles/themes";
import { SMALL_GAP } from "../../src/constants";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
	const theme = useTheme();

	const tmpIsMobile = useIsMobile();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(tmpIsMobile);
	}, []);

	const pathnames = {
		Home: "/",
		Leistungen: "/leistungen",
		Team: "/team",
		Blog: "/blog",
		Karriere: "/karriere",
		Kontakt: "/kontakt",
	};

	return (
		<GeistProvider themes={[QUIKK_light, QUIKK_dark]} themeType="QUIKK_dark">
			<header
				style={{
					background: theme.palette.foreground,
					position: "fixed",
					top: 0,
					width: "100%",
					zIndex: 99,
				}}
			>
				<Spacer y={SMALL_GAP} />
				<Container>
					<Grid.Container gap={0} justify="space-between" alignItems="center">
						<Grid>
							<InternalLink href="/">
								<Text h3 style={{ margin: 0, color: theme.palette.background }}>
									QUIKK
								</Text>
							</InternalLink>
						</Grid>
						<Grid>
							{isMobile ? (
								<MobileNavBar pathnames={pathnames} />
							) : (
								<DesktopNavBar pathnames={pathnames} />
							)}
						</Grid>
					</Grid.Container>
				</Container>
				<Spacer y={SMALL_GAP} />
			</header>
		</GeistProvider>
	);
};

export default Header;
