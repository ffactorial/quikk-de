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
				title="QUIKK Software: Softwareentwicklung und Webdesign"
				desc="QUIKK Software aus Minden bietet individuelle Softwareentwicklung, E-Commerce-Lösungen, mobile Apps und einzigartiges Webdesign an. Jetzt anfragen."
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
