import React from "react";
import Head from "next/head";

const DefaultSEO = () => {
  const name = "QUIKK Software";
  const city = "Minden";
  const latitude = 52.30219;
  const longitude = 8.86036;
  const region = "DE-NW";
  const keywords = [
    "individualsoftware",
    "web",
    "design",
    "web design",
    "anwendersoftware",
    "software",
    "entwicklung",
    "softwareentwicklung",
    "programmierung",
    "programmieren",
    "webdesign",
    "website",
    "webseite",
    "quikk",
    "individuell",
    "agil",
    "spezifisch",
    "outsourcing",
    "berater",
    "consulting",
    "minden",
    "bielefeld",
    "hannover",
    "osnabrück",
    "webentwickler",
    "entwickler",
    "webdevelopment",
    "development",
    "dev",
    "developer",
    "digitalisierung",
    "digitalisieren",
    "javascript",
    "technologiestack",
    "react",
    "schnittstellen",
    "srum",
    "datenbanken",
    "anwendungsentwicklung",
  ];
  const language = "de";
  const url = "https://quikk.de";
  const favicon = "/favicon.ico";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="content-type" content="text/html; charset=UTF-8" />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={name} />
      <meta name="copyright" content={name} />
      <meta name="robots" content="index,follow" />
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content={city} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:latitude" content={String(latitude)} />
      <meta property="og:longitude" content={String(longitude)} />
      <meta property="og:locality" content={city} />
      <meta property="og:region" content={region} />
      <meta property="HandheldFriendly" content="yes" />
      <meta property="audience" content="all" />
      <meta httpEquiv="language" content={language} />
      <meta name="language" content={language} />
      <link rel="icon" href={favicon} />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <link rel="shortcut icon" href={favicon} />
    </Head>
  );
};

export default DefaultSEO;
