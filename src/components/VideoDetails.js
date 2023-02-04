import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";
import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    FetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((data) => setVideoDetail(data.items[0]));
  }, [id]);

  if (!videoDetail?.snippet) return "...loading";

  return (
    <Box minHeight="100vh" sx={{ pt: 9 }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Typography sx={{ color: "white", p: 2, fontWeight: "bold" }}>
        {videoDetail.snippet.title}
      </Typography>
    </Box>
  );
};

export default VideoDetails;
