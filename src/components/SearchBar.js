import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onHandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #3d3d3d",
        backgroundColor: "#1a1a1a",
        pl: { xs: 0, sm: 0, md: 2 },
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "white",
          backgroundColor: "#303030",
          borderRadius: "0px",
          width: { xs: "30px", sm: "70px", md: "70px" },
        }}
        aria-label="search"
        border="none"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
