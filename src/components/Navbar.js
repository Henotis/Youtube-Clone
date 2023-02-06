import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirplayIcon from "@mui/icons-material/Airplay";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import FetchFromAPI from "../utils/FetchFromAPI";
import { Link } from "react-router-dom";

const Navbar = ({
  isDrawerOpen,
  setIsDrawerOpen,
  setVideos,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    FetchFromAPI(`search?q=${selectedCategory}&part=snippet`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: { xs: 0, sm: 0.1 },
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Box>
                <AirplayIcon sx={{ width: "20px", height: "18px" }} /> Gluetube
              </Box>
            </Link>
          </Typography>

          <SearchBar />
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <IconButton
            sx={{ size: { xs: "small", sm: "large" } }}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width="250px" height="100%" sx={{ backgroundColor: "#1a1a1a" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              align="center"
              sx={{ color: "white", paddingTop: "16px" }}
            >
              <AirplayIcon sx={{ width: "20px", height: "18px" }} /> Gluetube
            </Typography>
          </Link>
          <Sidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
