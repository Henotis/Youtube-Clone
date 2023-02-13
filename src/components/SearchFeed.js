import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const SearchFeed = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromAPI(`search?q=${id}&part=snippet`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{ pt: 10 }}
    >
      {videos?.map((item, index) => {
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

export default SearchFeed;
