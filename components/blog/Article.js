import { Card, Grid, Image, Spacer } from "@geist-ui/react";
import { Calendar, Clock } from "@geist-ui/react-icons";
import React, { useEffect, useState } from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import { getPreviewText, getReadingTimeInMinutes } from "../../utils/blog";
import useIsMobile from "../hooks/useIsMobile";
import AlignedUser from "../misc/AlignedUser";
import InternalLink from "../misc/InternalLink";
import TitleWithDesc from "../misc/TitleWithDesc";
import { TextWithIcon } from "../misc/WithIconHelper";

const Article = ({
	title = "",
	content = "",
	image,
	author,
	published_at = "",
	slug = "",
}) => {
	const tmpIsMobile = useIsMobile();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(tmpIsMobile);
	}, []);

	const { url } = image ?? { url: "" };
	const { name, avatar, position } = author ?? {
		name: "",
		avatar: "",
		position: "",
	};

	return (
		<Grid xs={24}>
			<InternalLink
				href={`/blog/${slug}`}
				style={{ width: "100%" }}
				width="100%"
			>
				<Card hoverable style={{ width: "100%" }} width="100%">
					<Grid.Container
						direction={isMobile ? "column-reverse" : "row"}
						gap={XTRA_LARGE_GAP}
					>
						<Grid xs={24} sm={24} md={16} direction="column">
							<Grid.Container>
								<TextWithIcon icon={<Calendar />}>
									{new Date(published_at).toLocaleDateString()}
								</TextWithIcon>
								<Spacer />
								<TextWithIcon icon={<Clock />}>
									{getReadingTimeInMinutes(content)} min
								</TextWithIcon>
							</Grid.Container>
							<Spacer />
							<TitleWithDesc
								title={title}
								desc={getPreviewText(content)}
								small
								grid={false}
							/>
							<Spacer />
							<AlignedUser {...{ avatar, name, position }} />
						</Grid>
						<Grid xs={24} sm={24} md={8}>
							<Image alt={title} src={url} />
						</Grid>
					</Grid.Container>
				</Card>
			</InternalLink>
		</Grid>
	);
};

export default Article;
