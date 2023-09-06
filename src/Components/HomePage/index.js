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
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";

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
        <TheHeader>" LONG TIME "</TheHeader>
        <HomePageImageContainer>
          <HomePageImage src="/musicimages/longtime.jpeg" />
          <ButtonContainer>
            <ButtonLinksContainer>
              <Link
                to="https://www.youtube.com/@dollarboi_international/"
                target="_blank"
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
      <UpcomingEvents />
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
