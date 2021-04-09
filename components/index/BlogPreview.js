import React from "react";
import { Grid, Button } from "@geist-ui/react";
import Container from "../layout/Container";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Title from "../misc/Title";
import Article from "../blog/Article";
import InternalLink from "../misc/InternalLink";
import useIsMobile from "../hooks/useIsMobile";
const BlogPreview = ({ articles }) => {
	const isMobile = useIsMobile();
	return (
		<Container spacing>
			<Grid.Container gap={XTRA_LARGE_GAP}>
				<Grid xs={24}>
					<Title title="Neues von uns" />
				</Grid>
				{articles.map((article, i) => (
					<Article {...article} key={i} />
				))}
				<Grid xs={24} sm={24} md alignItems="center" justify="center">
					<InternalLink
						href="/blog"
						style={{ width: isMobile ? "100%" : null }}
					>
						<Button
							type="secondary"
							style={{ width: isMobile ? "100%" : null }}
						>
							Zum Blog
						</Button>
					</InternalLink>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default BlogPreview;
