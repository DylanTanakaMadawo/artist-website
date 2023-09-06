import { Drawer } from "@mui/material";
import { useUIContext } from "../../Context/DrawerContext";
import { AppDrawerContentList, DrawerCloseButton } from "../../Styles";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";

// const MiddleDivider = styled((props) => (
//     <Divider variant='middle' {...props} sx={{borderColor: '#a2a3a2'}}/>
// ))``;

export default function AppDrawerMobile() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: "white",
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <AppDrawerContentList>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            ARTISTS
          </Link>
          <Link
            to="https://www.youtube.com/@dollarboi_international/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            MUSIC
          </Link>
          <Link
            to="https://www.youtube.com/@dollarboi_international/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            VIDEOS
          </Link>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdCT2Tf1VddXN_JeI-v_fS-ii5Cbby8Jrw0uXgvOk8p6bMF9Q/viewform"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            SHOWS
          </Link>
          <Link
            to="merch"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            MERCH
          </Link>
          {/* <Link
            to="collections"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            COLLECTIONS
          </Link> */}
        </AppDrawerContentList>
      </Drawer>
    </>
  );
}
