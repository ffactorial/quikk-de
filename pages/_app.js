import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DefaultSEO from "../components/meta/DefaultSEO";
import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
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
