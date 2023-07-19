import { Box, styled, IconButton, List, Typography } from "@mui/material";
import "@fontsource/montez";
import { Link } from "react-router-dom";

export const TypographyLato = styled(Typography)(() => ({
  fontFamily: "'Lato', sans-serif",
}));

export const AppbarContainerMobile = styled(Box)(() => ({
  width: "100%",
  height: "60px",
  backgroundColor: "black",
  color: "white",

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  position: "sticky",
  top: 0,
  zIndex: 99,
}));

export const AppbarCartMobile = styled(Box)(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'blue'
}));

export const AppDrawerContentList = styled(List)(() => ({
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "100px",
  // backgroundColor: 'pink',
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "fixed",
  top: 5,
  left: "10px",
  zIndex: 1999,
}));

//--------------------DESKTOP APPBAR--------------------

export const DesktopAppbarContainer = styled(Box)(() => ({
  backgroundColor: "white",
  color: "black",
  height: "60px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "50px",
  position: "sticky",
  top: 0,
  zIndex: 1001,
}));

export const DesktopHeader = styled(Box)(() => ({
  width: "25%",
  height: "100%",
  //   backgroundColor: "greenyellow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Header = styled(Typography)(() => ({
  fontFamily: " 'Montez', 'cursive' ",
  fontSize: "30px",
  color: "black",
  fontWeight: "bolder",
}));

export const DesktopNavs = styled(Box)(() => ({
  width: "30%",
  height: "100%",
  //   backgroundColor: "mediumaquamarine",
}));

export const NavLinks = styled(List)(() => ({
  height: "70%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "black",
}));

export const DesktopActions = styled(Box)(() => ({
  height: "100%",
  width: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  //   backgroundColor: "rosybrown",
  color: "black",
}));

//
//-------------------PRODUCTS-------------------------

export const ProductsContainer = styled(Box)(() => ({
  //   width: "100vw",
  backgroundColor: "#0f0f0f",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white",
  flexWrap: "wrap",
  //   padding: "50px",
}));

export const SingleProductContainer = styled(Box)(({ theme }) => ({
  //   height: "240px",
  //   width: "150px",
  //   // backgroundColor: 'grey',
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "space-between",
  //   marginBottom: "70px",
  padding: "10px 10px 0 10px",
  height: "300px",
  width: "230px",
  margin: "30px",
  // backgroundColor: 'lightgrey',
  // border: '1px solid lightgrey',
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    padding: "5px 5px 0 5px",
    height: "250px",
    width: "150px",
    // backgroundColor: 'lightgrey',
    // border: '1px solid lightgrey',
    marginBottom: "180px",
  },
}));

export const SingleProductImageContainer = styled(Box)(() => ({
  height: "80%",
  width: "100%",
  // borderBottom: '1px solid grey',
  // backgroundColor: 'rebeccapurple',
}));

export const ProductImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
}));

export const ProductInfo = styled(Box)(() => ({
  height: "20%",
  width: "100%",
  // fontSize: '10px'
  // backgroundColor: 'green',
}));

export const ProductName = styled(Typography)(() => ({
  padding: "10px",
  // fontSize: '15px',
  textAlign: "center",
}));

export const ProductPrice = styled(Typography)(() => ({
  padding: "10px",
  // fontSize: '15px',
  textAlign: "center",
}));

//------------------------FOOTER--------------------

export const FooterContainer = styled(Box)(() => ({
  height: "400px",
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  //   borderTop: "1px solid gray",
}));

export const FooterSocials = styled(Box)(() => ({
  height: "30%",
  width: "80%",
  // backgroundColor: 'pink',
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white",
}));

export const FooterLinks = styled(Box)(() => ({
  height: "30%",
  width: "100%",
  // backgroundColor: 'grey',
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const FooterList = styled(List)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white",
  // backgroundColor: 'yellow'
}));

export const FooterSignature = styled(Box)(() => ({
  height: "30%",
  width: "100%",
  display: "flex",
  // justifyContent: 'space-around',
  alignItems: "center",
  // backgroundColor: 'red',
}));

//----------------------------HOMEPAGE-----------------------------

export const HomePageContainer = styled(Box)(({ theme }) => ({
  // height: '500px',
  width: "100%",
  backgroundColor: "black",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    backgroundColor: "black",
  },
}));

export const HomePageImageContainer = styled(Box)(({ theme }) => ({
  // height: '100px',
  width: "50%",
  margin: "auto",
  // backgroundColor: 'grey',
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: "auto",
  },
}));

export const HomePageImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
}));

export const DownloadStream = styled(Link)(() => ({
  textDecoration: "none",
  height: "30px",
  width: "120px",
  marginTop: "20px",
  color: "white",
  border: "1px solid white",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  fontWeight: "bold",
  fontSize: "12px",
}));

export const HomePageNavbar = styled(Box)(() => ({
  width: "100%",
  height: "70px",
  backgroundColor: "black",
  color: "white",
}));

export const TheHeader = styled(Typography)(() => ({
  paddng: "4px",
  fontFamily: " 'Montez', 'cursive' ",
  fontSize: "2.5em",
  color: "white",
  backgroundColor: "black",
}));

export const ButtonLinksContainer = styled(Box)(() => ({
  width: "200px",
  height: "40px",
  backgroundColor: "white",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
}));

export const ButtonContainer = styled(Box)(() => ({
  width: "100%",
  height: "50px",
  // backgroundColor: 'grey',
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
}));

//----------------------------CART------------------------------

export const CartContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  margin: "auto",
  //   backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}));

export const CartProductContainer = styled(Box)(() => ({
  width: "70%",
  backgroundColor: "black",
  height: "150px",
  display: "flex",
  padding: "10px",
  border: "1px solid white",
}));

export const CartImageContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  // backgroundColor: 'red',
  height: "100%",
  marginRight: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "40%",
    // backgroundColor: 'red',
    height: "100%",
    marginRight: "30px",
    marginTop: "10px",
  },
}));

export const CartInfoContainer = styled(Box)(() => ({
  width: "60%",
  // backgroundColor: 'green',
  height: "100%",
  marginLeft: "15px",
  color: "white",
}));

export const CartAmount = styled(Box)(() => ({
  height: "20px",
  width: "20px",
  display: "flex",
  justifyContent: "center",
  aligntems: "center",
}));

export const AmountButtons = styled("button")(() => ({
  width: "21px",
  height: "21px",
  backgroundColor: "black",
  color: "white",
  border: "1px solid grey",
}));

//------------------------------------------FORM--------------------------------------

export const FormContainer = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  //   backgroundColor: "pink",
  display: "flex",
  justifyContent: "center",
  aligntems: "center",
}));

export const FormHouse = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  aligntems: "center",
  height: "80%",
  width: "80%",
  backgroundColor: "white",
  margin: "auto",
  padding: "20px",
}));
export const FormInputContainer = styled(Box)(() => ({
  //   backgroundColor: "gray",
  //   height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "80%",
}));

export const MyInputFields = styled("input")(() => ({
  padding: "15px",
  margin: "10px 0px",
  borderRadius: "5px",
  border: "1px solid gray",
}));

export const PhysicalAddress = styled("input")(() => ({
  padding: "15px 20px 50px 10px",
  margin: "10px 0px",
}));

export const SubmitButton = styled("button")(() => ({
  width: "50%",
  height: "50px",
  padding: "10px",
  border: "none",
  backgroundColor: "black",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bold",
  fontS: "18px",
  cursor: "pointer",
  marginTop: "15px",
  marginBottom: "30px",
  fontFamily: "'Lato', sans-serif",
}));

export const Labels = styled("label")(() => ({
  fontSize: "15px",
  color: "black",
  fontWeight: "bold",
}));
