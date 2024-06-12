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
          Geboren en getogen in<span className={style.bolder}> Brugge</span>.
          <br />
          Studerend in
          <span className={style.bolder}> Gent </span>
          in verschillende richtingen:
        </p>
        <ul>
          <li>Graduaat Programmeren</li>
          <li>Audiovisual Design</li>
        </ul>
        <p className={style.content}>
          Bekijk <span className={style.bolder}> mijn projecten </span>op deze
          website!
        </p>
        <ViewBtn link={"/projects"} text={"View more"} />
      </div>
      <Image />
    </div>
  );
}
