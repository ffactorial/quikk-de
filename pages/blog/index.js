import { Grid } from "@geist-ui/react";
import React from "react";
import Article from "../../components/blog/Article";
import Container from "../../components/layout/Container";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import TitleWithDesc from "../../components/misc/TitleWithDesc";
import { XTRA_LARGE_GAP } from "../../src/constants";
import { getArticles } from "../../utils/strapi";

const Articles = ({ articles }) => {
  const title = "Blog";
  const desc =
    "Hier zeigen wir, was uns aktuell beschäftigt, und stellen Ihnen relevante Technologien vor.";
  return (
    <>
      <TitleAndDesc {...{ title, desc }} />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <TitleWithDesc {...{ title, desc }} />
          {articles.map((article, i) => (
            <Article {...article} key={i} />
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  const articles = await getArticles();
  return {
    props: { articles },
    revalidate: 1,
  };
}
