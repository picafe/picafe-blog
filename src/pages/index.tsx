import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { AboutUs } from "../components/homepage/AboutUs";

import { Hero } from "../components/homepage/Hero";
import { Greeting } from "../components/homepage/Greeting";

import AboutUsDesc from "./assets/index/_about-us.md";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <div className="container padding-vert">
          <Greeting />
          <AboutUs
            avatar={"img/avatar.png"}
            descriptionComponent={<AboutUsDesc />}
          />
        </div>
      </main>
    </Layout>
  );
}
