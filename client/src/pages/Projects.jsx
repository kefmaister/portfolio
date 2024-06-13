import React from "react";
import ProjectCard from "../components/services/ProjectCard";
import { GET_PROJECTS_DATA } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS_DATA);
  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error: {error.message}</p>;

  const projectData = data.projects;
  console.log(projectData);
  return (
    <>
      <h1 className="header">Projects</h1>
      <div className="project-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </>
  );
}
