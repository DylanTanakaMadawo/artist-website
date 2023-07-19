import React from "react";
import {
  FooterList,
  HomePageContainer,
  HomePageNavbar,
  HomePageImageContainer,
  HomePageImage,
  TheHeader,
  ButtonLinksContainer,
  ButtonContainer,
} from "../../Styles";
import { Link } from "react-router-dom";
import { HomePageNavs } from "../HomePageNavs";

import { Divider, useMediaQuery, useTheme } from "@mui/material";

export const HomePage = () => {
  const theme = useTheme();

  const ifMatches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <HomePageContainer>
        {ifMatches ? (
          <HomePageNavbar>
            <HomePageNavs />
          </HomePageNavbar>
        ) : (
          <></>
        )}
        <TheHeader>" Album Name "</TheHeader>
        <HomePageImageContainer>
          <HomePageImage src="/musicimages/doncover.jpg" />
          <ButtonContainer>
            <ButtonLinksContainer>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                STREAM / DOWNLOAD
              </Link>
            </ButtonLinksContainer>
          </ButtonContainer>
        </HomePageImageContainer>
      </HomePageContainer>

      <Divider
        sx={{
          backgroundColor: "grey",
          width: "80%",
          margin: "auto",
          marginTop: "80px",
        }}
      />
    </>
  );
};
