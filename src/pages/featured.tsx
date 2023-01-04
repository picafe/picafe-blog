import React from "react";
import Layout from "@theme/Layout";

import { Project, featuredData } from "../components/featured/Featured";

const assetsDir = "./assets/apps";
const apps: featuredData[] = [
  {
    title: "Coming Soon",
    description:
      "Stay tuned, for now check out our other posts!.",
    url: "https://picafe.dev",
    url1: "https://picafe.dev",
    image: require(`${assetsDir}/coming-soon.png`),
    date: "Jan 3rd, 2023",
  },
];

const title = "Featured Apps";
const description = "A collection of produvtivity apps that we have featured on our blog.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {apps.map((app) => (
            <Project key={app.title} {...app} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
