import React from "react";
import { useQuery } from "@apollo/client";
import Carousel from "../carousel/Carousel";
import { GET_PROJECTS_DATA } from "../../graphql/queries";
import style from "./projects.module.css";
import ViewBtn from "../buttons/ViewBtn";
import ProjectCard from "../services/ProjectCard";
import { CircularProgress } from "@mui/material";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS_DATA);
  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div>
      <div>
        <h1 className="header">Projects</h1>
      </div>
      <div className={style.container}>
        {/* <div className={style.textContainer}>
          <h1>
            Projecten tijdens <br /> mijn studie!
          </h1>

          <p className={style.content}>
            Hier zijn een aantal projecten waar ik <br /> de voorbije jaren aan
            gewerkt heb.
          </p>
          <p className={style.content}>
            Bekijk meer<span className={style.bolder}> Projecten </span>op mijn
            andere pagina.
          </p>
          <ViewBtn link={"/projects"} text={"View more"} />
        </div>
        <div>
          <Carousel projects={data.projects} />
        </div> */}
        <ProjectCard data={data.projects} />
      </div>
    </div>
  );
}
