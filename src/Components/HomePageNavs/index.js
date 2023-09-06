import React from "react";

import "../../App.css";

import { FooterList } from "../../Styles";
import { Link } from "react-router-dom";

export const HomePageNavs = () => {
  return (
    <FooterList>
      <Link
        to="https://www.youtube.com/@dollarboi_international/"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        MUSIC
      </Link>
      <Link
        to="https://www.youtube.com/@dollarboi_international/"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        VIDEOS
      </Link>
      {/* <Link
        // id="shows"
        to="#shows"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        SHOWS
      </Link> */}
      <a
        className="a-tag"
        href="#shows"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "13px",
          //   scrollBehavior: "smooth",
        }}
      >
        SHOWS
      </a>
      <Link
        to="merch"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        MERCH
      </Link>
    </FooterList>
  );
};
