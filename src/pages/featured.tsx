import React from "react";
import Layout from "@theme/Layout";

import { Project, featuredData } from "../components/featured/Featured";

const apps: featuredData[] = [
  {
    title: "Moosync",
    description:
      "The best music player for the unorganized (like me). Proper review coming soon!",
    url: "https://moosync.app",
    url1: "https://github.com/Moosync/Moosync",
    image: "img/moosync-banner.png",
    date: "Mar 4th, 2023",
  },
];

const title = "Featured Apps";
const description =
  "A collection of produvtivity apps that we have featured on our blog.";

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
