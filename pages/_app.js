import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DefaultSEO from "../components/meta/DefaultSEO";
import { QUIKK_light } from "../styles/themes";

import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  return (
    <GeistProvider themes={[QUIKK_light]} themeType="QUIKK_light">
      <CssBaseline />
      <DefaultSEO />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </GeistProvider>
  );
};

export default _app;

export async function getStaticProps() {
  return {
    props: {},
  };
}
