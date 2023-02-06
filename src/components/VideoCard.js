import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const card = {
  width: { xs: "325px", sm: "358px", md: "358px" },
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
  width: { xs: "325px", sm: "358px" },
  height: 190,
};

const VideoCard = ({ video }) => {
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

  // I would try to add a view counter to each and every card but that would require me to make 50 API calls
  return (
    <div className="dropdown">
      <Card card="true" sx={card}>
        <Link
          to={`/video/${video.id.videoId}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.medium?.url}
            alt={video?.snippet?.title}
            sx={cardMedia}
          />
          <CardContent sx={{ height: "75px" }}>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {video?.snippet.title.slice(0, 55) || demoVideoTitle.slice(0, 55)}
              {video?.snippet.title.length > 60 ? "..." : ""}
            </Typography>
          </CardContent>
        </Link>
        <Link
          to={
            video?.snippet?.channelId
              ? `/channel/${video?.snippet.channelId}`
              : demoChannelUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{ pl: 2, color: "#b5b5b5", "&:hover": { color: "white" } }}
          >
            {channelDisabler ? video?.snippet.channelTitle : ""}
          </Typography>
        </Link>

        <div className="dropdown-content">
          <button className="video-button"> Watch Later </button>
          <button className="video-button"> Add to Queue </button>
        </div>
      </Card>
    </div>
  );
};

export default VideoCard;
