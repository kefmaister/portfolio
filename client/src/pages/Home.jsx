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
        {/* <Projects /> */}
      </section>
      <section>
        <Service />
      </section>
    </div>
  );
}
