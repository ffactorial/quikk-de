import React from "react";
import Hero from "../components/index/Hero";
import Introduction from "../components/index/Introduction";
import Services from "../components/index/Services";
import Work from "../components/index/Work";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import { getArticles } from "../utils/strapi";
import BlogPreview from "../components/index/BlogPreview";

const index = ({ articles }) => {
	return (
		<>
			<TitleAndDesc
				title="QUIKK Software - Softwareentwicklung & Webdesign aus Minden"
				desc="Entdecken Sie unsere digitalen Dienstleistungen und profitieren Sie von individueller Softwareentwicklung, mobilen Apps und einzigartigem Webdesign."
			/>
			<Hero />
			<Introduction />
			<Services />
			<Work />
			<BlogPreview {...{ articles }} />
		</>
	);
};

export default index;

export async function getStaticProps() {
	const articles = await getArticles();
	const articlesToShowInPreview = 3;
	return {
		props: { articles: articles.slice(0, articlesToShowInPreview) },
		revalidate: 1,
	};
}
