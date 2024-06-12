import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_DETAIL } from "../graphql/queries";
import Parse from "html-react-parser";
import style from "./css/detail.module.css";

export default function DetailPage({ type }) {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_DETAIL, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const detail = data[type];

  return <div className={style.container}>{data.project.description}</div>;
}
