import React from "react";
import style from "./jumbotron.module.css";
import ViewBtn from "../buttons/ViewBtn";
import Image from "./Image";

export default function Jumbotron() {
  return (
    <div className={style.container}>
      <div>
        <h1>
          Hi, I'm <span>Kevin!</span>
        </h1>
        <p>
          <span className={style.highlight}>
            Full stack javascript developer{" "}
          </span>
        </p>
        <p className={style.content}>
          Born and raised in<span className={style.bolder}> Bruges</span>.
          <br />
          Studied in
          <span className={style.bolder}> Ghent </span>
          in various fields:
        </p>
        <ul>
          <li>Graduate in programming</li>
          <li>Bachlor Audiovisual Design</li>
        </ul>
        <p className={style.content}>
          Bekijk <span className={style.bolder}> mijn projecten </span>op deze
          website!
        </p>
        <ViewBtn link={"/projects"} text={"View projects"} />
      </div>
      <Image />
    </div>
  );
}
