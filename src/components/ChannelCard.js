import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "358px", md: "328px" },
        height: "280px",
        margin: "auto",
      }}
    >
      <Link
        to={`/channel/${channel?.id?.channelId}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent>
          <CardMedia
            image={channel?.snippet?.thumbnails?.high.url || demoProfilePicture}
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography align="center" sx={{ color: "gray" }}>
            {channel?.snippet.title}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
