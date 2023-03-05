import React, { FunctionComponent } from "react";

export const Hero: FunctionComponent = () => {
  return (
    <header className="hero hero--primary heroBanner">
      <div className="container">
        <h1 className="hero__title title">
          Welcome to the
          <span className="highlighted"> picafe blog</span>,
          <br />A blog about tech stuff.
        </h1>
        <p className="hero__subtitle subtitle">
          We cover everything from software to hardware,
          <br /> with new articles every week (usually).
        </p>
      </div>
    </header>
  );
};
