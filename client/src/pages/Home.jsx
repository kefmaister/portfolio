import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Service from "../components/services/Service";
export default function Home() {
  return (
    <div className="background-top">
      <section>
        <Jumbotron />
      </section>
      <section>
        <h1 className="header">What i want</h1>
        <video width="100%" autoPlay loop muted>
          <source src="/assets/video/comingSoon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section>
        <Service />
      </section>
    </div>
  );
}
