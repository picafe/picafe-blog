import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Welcome to the 
          <span className={styles.highlighted}> picafe blog
          </span>,
          <br />
          A blog about tech stuff.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          We cover everything from software to hardware,
          <br /> with new articles every week (usually).
        </p>
      </div>
    </header>
  );
};
