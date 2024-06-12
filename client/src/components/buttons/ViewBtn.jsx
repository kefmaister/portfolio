import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ViewBtn({ text, link, border, newTab = false }) {
  const LinkBehavior = React.forwardRef((props, ref) =>
    newTab ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        {...props}
      />
    ) : (
      <Link to={link} ref={ref} {...props} />
    )
  );

  return (
    <Button
      variant="contained"
      component={LinkBehavior}
      sx={{
        backgroundColor: "var(--orange)",
        color: "var(--base)",
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        borderRadius: border,
        "&:hover": {
          backgroundColor: "var(--dark-orange)",
        },
      }}
    >
      {text}
    </Button>
  );
}
