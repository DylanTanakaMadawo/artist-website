import React from "react";

import "./UpcomingEvents.css";
import { Link } from "react-router-dom";
import { ButtonContainer, ButtonLinksContainer, TheHeader } from "../../Styles";

export const UpcomingEvents = () => {
  return (
    <>
      <TheHeader>Upcoming Events</TheHeader>
      <div className="upcoming-events-container" id="shows">
        <img src="./musicimages/dollarnationent-brunch.jpg" alt="event image" />
        <div className="interested-btn">
          <ButtonContainer>
            <ButtonLinksContainer>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSdCT2Tf1VddXN_JeI-v_fS-ii5Cbby8Jrw0uXgvOk8p6bMF9Q/viewform"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                LEARN MORE
              </Link>
            </ButtonLinksContainer>
          </ButtonContainer>
        </div>
      </div>
    </>
  );
};
