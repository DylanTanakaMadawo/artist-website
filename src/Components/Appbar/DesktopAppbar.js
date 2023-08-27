import React from "react";
import {
  DesktopAppbarContainer,
  DesktopHeader,
  Header,
  DesktopNavs,
  NavLinks,
  DesktopActions,
} from "../../Styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const DesktopAppbar = () => {
  return (
    <DesktopAppbarContainer>
      <DesktopHeader>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          er
        >
          <Header>DOLLARNATION</Header>
        </Link>
      </DesktopHeader>
      <DesktopNavs>
        <NavLinks>
          <Link
            to="music"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              fontSize: "13px",
            }}
          >
            MUSIC
          </Link>
          <Link
            to="videos"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              fontSize: "13px",
            }}
          >
            VIDEOS
          </Link>
          <Link
            to="shows"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              fontSize: "13px",
            }}
          >
            SHOWS
          </Link>
          <Link
            to="merch"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              fontSize: "13px",
            }}
          >
            MERCH
          </Link>
        </NavLinks>
      </DesktopNavs>
      <DesktopActions>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <ShoppingCartIcon />
        </Link>
      </DesktopActions>
    </DesktopAppbarContainer>
  );
};
