import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_DETAIL } from "../graphql/queries";
import Parse from "html-react-parser";
import style from "./css/detail.module.css";
import Gallery from "../components/services/Gallery";

export default function DetailPage({ type }) {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_SERVICE_DETAIL, {
    variables: { slug },
  });

  console.log(data);
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
        </>
      )}
    </div>
  );
}
