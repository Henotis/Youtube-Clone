import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import FetchFromAPI from "../utils/FetchFromAPI";
import Feed from "./Feed";
import { Link } from "react-router-dom";

const Navbar = ({ isDrawerOpen, setIsDrawerOpen, setVideos }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");

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
            sx={{ flexGrow: 0.1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <span>Gluetube</span>
            </Link>
          </Typography>

          <SearchBar />
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <IconButton size="large" color="inherit">
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            sx={{ color: "white", paddingTop: "16px" }}
          >
            Gluetube
          </Typography>
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
