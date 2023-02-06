import { Box, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";
import Videos from "./Videos";
import { Link, Outlet } from "react-router-dom";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await FetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date&maxResults=50`
      );
      setVideos(videosData?.items);
    };
    fetchDetails();
  }, [id]);

  return (
    <Box height="100%">
      <Box width="100%" height="250px" backgroundColor="#009e7c" />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          color: "#fff",
          height: "200px",
          pl: 5,
        }}
      >
        <CardMedia
          component="img"
          image={channelDetail?.snippet?.thumbnails?.default?.url}
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

      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Link to="videos" style={{ textDecoration: "none" }}>
          <button className="category-btn">videos</button>
        </Link>
        <Link to="about" style={{ textDecoration: "none" }}>
          <button onClick={() => setVisible(false)} className="category-btn">
            About
          </button>
        </Link>
      </Stack>

      <Box width="110%" height="2px" backgroundColor="gray" sx={{ mb: 5 }} />
      {visible && <Videos videos={videos} />}
      {!visible && <Outlet context={[videos, channelDetail]} />}
    </Box>
  );
};

export default ChannelDetails;
