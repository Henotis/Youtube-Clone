import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";

const ChannelAbout = () => {
  const [videos, channelDetail] = useOutletContext();
  const toInt = parseInt(channelDetail?.statistics?.viewCount);
  const formattedNumber = toInt.toLocaleString("en-US");
  return (
    <Stack
      sx={{
        display: "flex",
        color: "white",
        flexDirection: { sm: "column", md: "row" },
        height: "500px",
        width: "95%",
        backgroundColor: "#1a1a1a",
        pl: 5,
      }}
    >
      <Box sx={{ width: { sm: "95%", lg: "60%" } }}>
        <Typography variant="h4" sx={{ pb: 2 }}>
          Description
        </Typography>
        <Typography sx={{ pb: 2 }}>
          {channelDetail.snippet.description}
        </Typography>
      </Box>
      <Box sx={{ pl: { sm: 0, md: 10 }, width: "40%" }}>
        <Typography variant="h6">Stats</Typography>
        <Typography>{`Joined ${channelDetail?.snippet?.publishedAt.slice(
          0,
          10
        )}`}</Typography>
        <Typography>{` ${formattedNumber} total views`}</Typography>
      </Box>
    </Stack>
  );
};

export default ChannelAbout;
