import { Grid, Image, Text } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Title from "../misc/Title";

const IntroductionSection = ({
	src = "",
	title = "",
	content = "",
	revert = false,
	alt = "",
}) => {
	alt = alt.length > 0 ? alt : title;
	const Img = () => <Image src={src} alt={alt} />;

	return (
		<Grid>
			<Grid.Container gap={XTRA_LARGE_GAP} alignItems="center" justify="center">
				<Grid xs={24} sm={revert ? 0 : 10}>
					<Img />
				</Grid>
				<Grid xs={24} sm={14}>
					<Grid.Container>
						<Grid.Container xs={24}>
							<Title title={title} centered={false} />
						</Grid.Container>
						<Grid xs={24}>
							<Text p type="secondary">
								{content}
							</Text>
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

export default IntroductionSection;
