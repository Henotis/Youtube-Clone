import { Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Typography
      sx={{ textAlign: "center", pt: 20, color: "white", height: "100vh" }}
    >
      The page you're looking for doesnt exist :/
    </Typography>
  );
};

export default Error;
