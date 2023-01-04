import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import styles from "./AboutUs.module.scss";

export interface AboutUsProps {
  avatar: string;
  descriptionComponent: React.ReactNode;
}

export const AboutUs: FunctionComponent<AboutUsProps> = ({
  avatar,
  descriptionComponent,
}) => {
  return (
    <><div className="margin-top--lg">
      <h2>About Us</h2>
      <div className="row">
        <div className="col col--6">{descriptionComponent}</div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <Image img={avatar} />
          </div>
        </div>
      </div>
    </div></>
  );
};
