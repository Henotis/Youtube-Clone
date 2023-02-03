import { categories } from "../utils/constants";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  setIsDrawerOpen,
}) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Stack
        direction="column"
        sx={{
          overflowY: "auto",
          height: "95%",
        }}
      >
        {categories.map((category) => {
          return (
            <button
              className="category-btn"
              onClick={() => {
                setSelectedCategory(category.name);
                setIsDrawerOpen(false);
              }}
              key={category.name}
              style={{
                background: category.name === selectedCategory && "#545454",
              }}
            >
              <span className="sidebar-span">{category.icon} </span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </Stack>
    </Link>
  );
};

export default Sidebar;
