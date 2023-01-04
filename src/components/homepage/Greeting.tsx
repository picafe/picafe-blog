import React, { FunctionComponent } from "react";
import styles from "./Greeting.module.scss";

export const Greeting: FunctionComponent = () => {
    return (
        <div className={styles.container}>
        <svg className={styles.welcome} viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">Welcome!</text>
          </symbol>
          <g className="g-ants">
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
          </g>
        </svg>
      </div>
    );
};