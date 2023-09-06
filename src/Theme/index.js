import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: "20px 0 20px 0",
          width: "100%",
          backgroundColor: "black",
          color: "white",
          borderRight: "1px solid lightgrey",
        },
      },
    },
  },
});

export default theme;
