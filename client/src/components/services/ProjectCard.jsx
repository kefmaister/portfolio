import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ViewBtn from "../buttons/ViewBtn";

export default function ProjectCard({ data }) {
  return (
    <Card sx={{ display: "flex", width: "50rem" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={data.image.url}
        alt={data.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {data.skillsets.map((skill) => (
            <Avatar
              alt={skill.name}
              src={skill.logo.url}
              sx={{ width: 30, height: 30, marginRight: 1 }}
            />
          ))}
          <Box sx={{ marginLeft: "auto" }}>
            <ViewBtn text={"Github"} link={`${data.github}`} newTab={true} />
            <ViewBtn text={"Website"} link={`${data.url}`} newTab={true} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
