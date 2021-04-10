import { Grid, Text, useTheme, Image, Button } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import hero from "../../assets/images/puzzle.svg";
import useIsSubpage from "../hooks/useIsSubpage";
import { useRouter } from "next/router";
import useIsMobile from "../hooks/useIsMobile";
import { ChevronLeft } from "@geist-ui/react-icons";

const Hero = ({ title = "", subtitle = "", src = hero }) => {
	const theme = useTheme();
	const router = useRouter();
	const isMobile = useIsMobile();
	const { isSubPath } = useIsSubpage();

	const BackButton = () => (
		<Button
			type="secondary"
			onClick={() => router.back()}
			style={{ width: isMobile ? "100%" : null }}
			icon={<ChevronLeft />}
		>
			Zurück
		</Button>
	);

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: theme.palette.accents_1,
				padding: `${isMobile ? 0 : XTRA_LARGE_GAP}em 0`,
			}}
		>
			<Container spacing>
				<Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
					{isSubPath && isMobile && (
						<Grid xs={24}>
							<BackButton />
						</Grid>
					)}
					<Grid xs={24} sm={24} md={14} direction="column">
						<Text h1 style={{ lineHeight: 1 }}>
							{title}
						</Text>
						<Text type="secondary" style={{ marginTop: 0 }}>
							{subtitle}
						</Text>
						{isSubPath && !isMobile && <BackButton />}
					</Grid>
					<Grid xs={24} sm={24} md={10} justify="center">
						<Image
							src={src}
							alt="QUIKK Software Softwareentwicklung"
							style={{ maxWidth: "300px" }}
						/>
					</Grid>
				</Grid.Container>
			</Container>
		</section>
	);
};

export default Hero;
