import { Box, Typography } from "@mui/material";
import Videos from "./Videos";

const Feed = ({ videos, selectedCategory }) => {
  // selectedCategory

  return (
    <Box sx={{ height: "100vh" }}>
      <Typography sx={{ color: "white", fontWeight: "bold", mt: 10, p: 2 }}>
        {selectedCategory} Videos
      </Typography>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "100vh",
          flex: 2,
          paddingTop: "20px",
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Feed;
