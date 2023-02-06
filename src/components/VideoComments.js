import { CardMedia, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FetchFromAPI from "../utils/FetchFromAPI";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const VideoComments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    FetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) => {
      setComments(data.items.slice(0, 20));
    });
  }, [id]);

  return (
    <Stack flexDirection="column">
      <Typography sx={{ color: "white", pt: 2, fontWeight: "bold" }}>
        Comments
      </Typography>
      {comments.map((comment, idx) => {
        return (
          <Stack key={idx} flexDirection="column" sx={{ pt: 3, pl: 3 }}>
            <Stack flexDirection="row">
              <CardMedia
                component="img"
                image={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
                sx={{
                  width: "40px",
                  height: "40px",
                  minWidth: "40px",
                  minHeight: "40px",
                  borderRadius: "20px",
                }}
              />
              <Stack sx={{ color: "white", pl: 2 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorDisplayName
                  }
                </Typography>
                <Typography>
                  {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                </Typography>
                <Stack flexDirection="row">
                  <ThumbUpOffAltIcon />
                  <Typography sx={{ color: "gray" }}>
                    {comment?.snippet?.topLevelComment?.snippet?.likeCount === 0
                      ? ""
                      : comment?.snippet?.topLevelComment?.snippet?.likeCount}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default VideoComments;
