import { Box, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import FetchFromAPI from "../utils/FetchFromAPI";
import Videos from "./Videos";
import Sidebar from "./Sidebar";


const Feed = ({ videos }) => {
  
  // selectedCategory

  return (
    <Box sx={{ height: "100vh" }}>
      
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "100vh",
          flex: 2,
          paddingTop: "100px",
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Feed;
