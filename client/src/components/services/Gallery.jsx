import React, { useState } from "react";
import style from "./service.module.css";
import { Grid, Modal, Backdrop, Fade } from "@mui/material";

export default function Gallery({ title, images }) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = (image) => {
    setActiveImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.imageContainer}>
      <h1>{title}</h1>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <img
              className={style.image}
              src={image}
              alt={title}
              onClick={() => handleOpen(image)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClick={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className={style.modal}>
            <img className={style.modalImage} src={activeImage} alt={title} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
