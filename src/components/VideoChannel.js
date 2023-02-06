import { CardMedia, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";

const VideoChannel = ({ id, channelId }) => {
  const [videoChannel, setVideoChannel] = useState([]);
  const formattedNumber = parseInt(
    videoChannel?.statistics?.subscriberCount
  ).toLocaleString("en-US");
  useEffect(() => {
    FetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
      (data) => {
        setVideoChannel(data?.items[0]);
      }
    );
  }, [id]);

  return (
    <Stack flexDirection="row" sx={{ color: "white", pt: 2 }}>
      <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          image={videoChannel?.snippet?.thumbnails?.default?.url}
          sx={{ width: "60px", height: "60px", borderRadius: "100px" }}
        />
      </Link>
      <Stack sx={{ pl: 2, pt: 1 }}>
        <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            {videoChannel?.snippet?.title}
          </Typography>
        </Link>
        <Typography sx={{ color: "gray" }}>
          {formattedNumber} subscribers
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoChannel;
