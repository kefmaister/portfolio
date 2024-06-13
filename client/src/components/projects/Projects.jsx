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
        <ProjectCard data={data.projects} />
      </div>
    </div>
  );
}
