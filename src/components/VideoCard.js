import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { width } from "@mui/system";

const card = {
  width: { xs: "100%", sm: "358px", md: "320px" },
  boxShadow: "none",
  borderRadius: "11px",
  backgroundColor: "#1a1a1a",

  "&:hover": {
    backgroundColor: "#5e5e5e",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    cursor: "pointer",
  },
};

const cardMedia = {
  width: { xs: "100%", sm: "358px" },
  height: 180,
  borderRadius: "10px",
};

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // if the route is at /channel, the link to go to channel is disabled
  const location = useLocation();
  const [channelDisabler, setChannelDisabler] = useState(true);
  const disableChannel = () => {
    if (location.pathname.slice(0, 8) === "/channel") {
      setChannelDisabler(false);
    } else {
      setChannelDisabler(true);
    }
  };

  useEffect(() => {
    disableChannel();
  }, [location.pathname]);

  return (
    <div className="dropdown">
      <Card card="true" sx={card}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={cardMedia}
        />
        <CardContent sx={{ height: "106px" }}>
          <Typography sx={{ color: "white", height: "50px" }}>
            {snippet.title.slice(0, 55) || demoVideoTitle.slice(0, 55)}
            {snippet.title.length > 60 ? "..." : ""}
          </Typography>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet.channelId}`
                : demoChannelUrl
            }
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{ color: "#b5b5b5", "&:hover": { color: "white" } }}
            >
              {channelDisabler ? snippet.channelTitle : ""}
            </Typography>
          </Link>
        </CardContent>

        <div className="dropdown-content">
          <button className="video-button"> Watch Later </button>
          <button className="video-button"> Add to Queue </button>
        </div>
      </Card>
    </div>
  );
};

export default VideoCard;
