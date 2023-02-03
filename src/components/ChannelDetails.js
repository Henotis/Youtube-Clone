import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";
import Videos from "./Videos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const [channelUrl, setChannelUrl] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      setChannelUrl(channelDetail?.snippet?.thumbnails?.high?.url);

      const videosData = await FetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date&maxResults=50`
      );
      setVideos(videosData?.items);
    };
    fetchDetails();
  }, [id]);

  return (
    <Box height="100%" sx={{ pl: 2 }}>
      <Box
        width="110%"
        height="250px"
        backgroundColor="#009e7c"
        sx={{ ml: -2 }}
      />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          color: "#fff",
          height: "200px",
        }}
      >
        <CardMedia
          component="img"
          image={channelUrl}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "100px",
            width: "100px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", pl: "50px" }}
        >
          <Typography>{channelDetail?.snippet?.title}</Typography>
          <Typography sx={{ color: "gray" }}>
            {channelDetail?.snippet?.customUrl}
          </Typography>
          <Typography sx={{ color: "gray" }}>
            {`${channelDetail?.statistics?.subscriberCount} subscribers`}
          </Typography>
        </CardContent>
      </CardContent>
      <Box
        width="110%"
        height="2px"
        backgroundColor="gray"
        sx={{ ml: -2, mb: 5 }}
      />
      <Videos videos={videos} />
    </Box>
  );
};

export default ChannelDetails;
