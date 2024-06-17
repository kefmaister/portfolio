import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_DETAIL } from "../graphql/queries";
import Parse from "html-react-parser";
import style from "./css/detail.module.css";
import Gallery from "../components/services/Gallery";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function DetailPage({ type }) {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const { loading, error, data } = useQuery(GET_SERVICE_DETAIL, {
    variables: { slug },
  });

  console.log(data);
  // row data
  // const row = {
  //   title: "Example Title",
  //   details: [
  //     { location: "Location 1", description: "Description 1" },
  //     { location: "Location 2", description: "Description 2" },
  //     // Add more objects as needed
  //   ],
  // };

  const row = [
    {
      title: "Bartender",
      details: [
        {
          location: "Birthday Parties",
          description: "Tapping beers, serving guest",
        },
        {
          location: "Anniversary",
          description: "Tapping beers, simple cocktail making, serving guest",
        },
      ],
    },
    {
      title: "Hospitality worker",
      details: [
        {
          location: "Weddings",
          description: "Helping out serving the guest the diffrent dishes.",
        },
        {
          location: "Private events",
          description: "Helping out serving the guest the diffrent dishes. Helping with setting up and breaking down",
        },
      ],
    },
    {
      title: "Driver",
      details: [
        { location: "Airport", description: "Driving to and picking up from" },
        { location: "Restaurants", description: "Driving to and picking up from" },
        { location: "Special events", description: "Driving to and picking up from" },
      ],
    },
  ];

  //pictures
  let kwizien = [
    "/assets/images/kwizien/IMG_2736.jpg",
    "/assets/images/kwizien/IMG_2740.jpg",
    "/assets/images/kwizien/IMG_2899.jpg",
  ];

  let orfeo = [
    "/assets/images/orfeo/IMG_3654.jpg",
    "/assets/images/orfeo/IMG_3683.jpg",
    "/assets/images/orfeo/IMG_3697.jpg",
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={style.container}>
      {slug === "photographer" ? (
        <>
          <h1 className="header">Highlighted photos</h1>
          <Gallery title="Kwizien - Maldegem" images={kwizien} />
          <Gallery title="Orfeo - Brugge" images={orfeo} />
        </>
      ) : (
        <>
          <h1 className="header">{data.service.title}</h1>
          <Table>
            {row.map((section, index) => (
              <React.Fragment key={index}>
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                  <TableCell>
                    <IconButton size="small" onClick={() => handleClick(index)}>
                      {open[index] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {section.title}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={4}
                  >
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Details
                        </Typography>
                        <Table size="small" aria-label="details">
                          <TableHead>
                            <TableRow>
                              <TableCell style={{ fontWeight: "bold" }}>
                                Location
                              </TableCell>
                              <TableCell style={{ fontWeight: "bold" }}>
                                Description
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {section.details.map((detailRow) => (
                              <TableRow key={detailRow.location}>
                                <TableCell component="th" scope="row">
                                  {detailRow.location}
                                </TableCell>
                                <TableCell>{detailRow.description}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </Table>
        </>
      )}
    </div>
  );
}
