import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { useState } from "react";
import FetchFromAPI from "../utils/FetchFromAPI";

const Videos = ({ videos, direction }) => {


  if (!videos?.length) return "...loading";
  
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
