import { Grid, Image, Text, Button } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import useIsMobile from "../hooks/useIsMobile";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";

const ServicePreview = ({
	src = "",
	title = "",
	content = "",
	revert = false,
	alt = "",
	cta = "Mehr Informationen",
	href = "",
}) => {
	const isMobile = useIsMobile();
	alt = alt.length > 0 ? alt : `QUIKK Software: ${title}`;
	const Img = () => (
		<Image
			src={src}
			alt={alt}
			style={{ maxHeight: "300px", maxWidth: "300px" }}
		/>
	);

	return (
		<Grid xs={24} direction="column" alignItems="center" justify="center">
			<Grid.Container gap={XTRA_LARGE_GAP} alignItems="center" justify="center">
				<Grid xs={24} sm={revert ? 0 : 10}>
					<Img />
				</Grid>
				<Grid xs={24} sm={14}>
					<Grid.Container>
						<Grid.Container xs={24}>
							<Title title={title} centered={false} />
						</Grid.Container>
						<Grid xs={24} direction="column">
							<Text p type="secondary">
								{content}
							</Text>
							<InternalLink
								href={href}
								style={{ width: isMobile ? "100%" : null }}
							>
								<Button
									type="secondary"
									style={{ width: isMobile ? "100%" : null }}
								>
									{cta}
								</Button>
							</InternalLink>
						</Grid>
					</Grid.Container>
				</Grid>
				<Grid xs={0} sm={revert ? 10 : 0}>
					<Img />
				</Grid>
			</Grid.Container>
		</Grid>
	);
};

export default ServicePreview;
