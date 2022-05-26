import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, InputBase } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  searchInput: {
    opacity: "0.9",
    right: "25px",
    paddingLeft: "10px",
    justifyContent: "end",
    fontSize: "1.1rem",
    height: "31px",
    borderRadius: "12px",
    backgroundColor: "white",
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
}));

function Header() {
  const classes = useStyle();
  const [search, setSearch] = useState("");

  return (
    <div className="header">
      <div className="head1">All Games</div>
      
      <div className="head2">
          <div>
        <InputBase
          className={`${classes.searchInput} md-4`}
          placeholder="Search"
          //onChange={(e) => handleSearch(e)}
          value={search}
        /></div>
        <div>
        <a>
          <i class="fa-solid fa-bell"></i>
        </a></div>
        <div className="profile"></div>
        <div><h3>User Name</h3></div>
      </div>
    </div>
  );
}

export default Header;
