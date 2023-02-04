import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ChannelDetails from "./components/ChannelDetails";
import VideoDetails from "./components/VideoDetails";
import ChannelVideos from "./components/ChannelVideos";
import ChannelAbout from "./components/ChannelAbout";
import SearchFeed from "./components/SearchFeed";

const navTheme = createTheme({
  palette: {
    primary: {
      main: "#1a1a1a",
    },
  },
});

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={navTheme}>
        <Box
          sx={{
            backgroundColor: "#1a1a1a",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Navbar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            videos={videos}
            setVideos={setVideos}
          />
          <Routes>
            <Route path="/" exact element={<Feed videos={videos} />} />
            <Route path="channel/:id/" exact element={<ChannelDetails />}>
              <Route path="videos" exact element={<ChannelVideos />} />
              <Route path="about" exact element={<ChannelAbout />} />
            </Route>
            <Route path="/video/:id" exact element={<VideoDetails />} />
            <Route path="/search/:id" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
