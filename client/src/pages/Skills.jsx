import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { GET_ALL_SKILLS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { ThemeContext } from "../context/ThemeContext";

export default function Team() {
  const [isDarkMode] = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_ALL_SKILLS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  const skills = data.skillsets;
  return (
    <div>
      <h1 className="header">Skills</h1>
      <div className="member-container">
        {[...skills]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill, index) => (
            <Card
              key={`skill - ${index}`}
              sx={{ maxWidth: 300, background: "none", width: "150px" }}
            >
              <CardMedia
                component="img"
                className="skill-logo"
                image={skill.logo.url}
                alt={skill.name}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: isDarkMode ? "white" : "",
                    marginBottom: 0,
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {skill.name}
                </Typography>
                <Rating
                  sx={{
                    width: "100%",
                    display: "flex",
                    "& .MuiRating-iconEmpty svg": {
                      color: isDarkMode ? "white" : "black",
                    },
                  }}
                  name="half-rating"
                  value={skill.level}
                  max={5}
                  readOnly
                />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
