import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchFromAPI from "../utils/FetchFromAPI";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import VideoComments from "./VideoComments";
import VideoChannel from "./VideoChannel";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVids, setRelatedVids] = useState([]);
  const [isActive, setisActive] = useState(true);
  const formattedNumber = parseInt(
    videoDetail?.statistics?.viewCount
  ).toLocaleString("en-US");

  const closed = {
    height: "50px",
    overflowY: "hidden",
  };

  const open = {
    height: "auto",
  };

  const toggleButton = () => {
    setisActive(!isActive);
  };

  useEffect(() => {
    FetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((data) => setVideoDetail(data.items[0]));

    FetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => setRelatedVids(data.items.slice(0, 20))
    );
  }, [id]);

  if (!videoDetail?.snippet) return "...loading";

  return (
    <Box minHeight="100vh" sx={{ pt: 9 }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
        <Stack sx={{ p: 2, width: { sm: "100%", lg: "70%" } }}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            {videoDetail.snippet.title}
          </Typography>
          <VideoChannel id={id} channelId={videoDetail.snippet.channelId} />
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "#333333",
              color: "white",
              p: 2,
              mt: 3,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {formattedNumber} views{" "}
              <span>{videoDetail?.snippet?.publishedAt.slice(0, 10)}</span>
            </Typography>
            <Box sx={isActive ? closed : open}>
              <Typography>{videoDetail?.snippet?.description}</Typography>
            </Box>
            <button onClick={toggleButton} className="show-btn">
              show more
            </button>
          </Box>
          <VideoComments id={id} />
        </Stack>
        <Box sx={{ p: 2 }}>
          <Typography sx={{ color: "white", fontWeight: "bold", p: 2 }}>
            Related Videos
          </Typography>
          <Videos
            videos={relatedVids}
            direction={{ xs: "row", lg: "column" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
