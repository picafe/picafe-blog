import clsx from "clsx";
import React, { FunctionComponent } from "react";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Featured.module.css";

export interface featuredData {
  title: string;
  description: string;
  date?: string;
  url: string;
  url1: string;
  image: string;
}

export const Project: FunctionComponent<featuredData> = ({
  title,
  description,
  url,
  url1,
  date,
  image,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          <img src={image} alt={description} title={title} />
          {date && (
            <span className={clsx("badge badge--secondary", styles.date)}>
              Date: {date}
            </span>
          )}
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            className="button button--primary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            Discover
          </a>
          <a
            href={url1}
            target="_blank"
            className="button button--secondary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
