import React, { FunctionComponent } from "react";
import clsx from "clsx"
import styles from "./Greeting.module.scss";

export const Greeting: FunctionComponent = () => {
    return (
        <div className={clsx(styles.greetingContainer)}>
            <h1>System<span style={{color: 'white'}}>.<span style={{color: '#e06c75'}}>out</span>.</span><span style={{color: '#61afef'}}>println</span>("</h1>
            <div className={clsx(styles.string)}>
            <h1 className={clsx(styles.greeting, styles.en)}>Hello World!</h1>
            <h1 className={clsx(styles.greeting, styles.fr)}>Bonjour Tout le Monde!</h1>
            <h1 className={clsx(styles.greeting, styles.es)}>Hola Mundo!</h1>
            </div>
            <h1 className={clsx(styles.closure)}>");</h1>
        </div>

    );
};