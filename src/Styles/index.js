import { Box, styled, IconButton, List, Typography, Button } from "@mui/material";
import '@fontsource/montez';
import { Link } from "react-router-dom";


export const TypographyLato = styled(Typography)(() => ({

    fontFamily: "'Lato', sans-serif",

}));

export const AppbarContainerMobile = styled(Box)(() => ({
    width: '100%',
    height: '60px',
    backgroundColor: 'black',
    color: 'white',

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    position: 'sticky',
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
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '100px',
    // backgroundColor: 'pink',
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'fixed',
    top: 5,
    left: '10px',
    zIndex: 1999,
}));

//-------------------PRODUCTS-------------------------

export const ProductsContainer = styled(Box)(() => ({
    backgroundColor: '#0f0f0f',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    flexWrap: 'wrap',
    padding: '50px',

}));

export const SingleProductContainer = styled(Box)(() => ({
    height: '240px',
    width: '150px',
    // backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    marginBottom: '70px',
    
}));

export const SingleProductImageContainer = styled(Box)(() => ({
    height: '80%',
    width: '100%',
    // borderBottom: '1px solid grey',
    // backgroundColor: 'rebeccapurple',
}));

export const ProductImage = styled('img')(({src}) => ({
    src: `url(${src})`,
    width: '100%',
}));

export const ProductInfo = styled(Box)(() => ({
    height: '20%',
    width: '100%',
    // fontSize: '10px'
    // backgroundColor: 'green',
}));

export const ProductName = styled(Typography)(() => ({
    padding: '10px',
    // fontSize: '15px',
    textAlign: 'center'
}));

export const ProductPrice = styled(Typography)(() => ({
    padding: '10px',
    // fontSize: '15px',
    textAlign: 'center',
    
}));

//------------------------FOOTER--------------------

export const FooterContainer = styled(Box)(() => ({
    height: '400px',
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
}));

export const FooterSocials = styled(Box)(() => ({
    height: '30%',
    width: '80%',
    // backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white'
}));

export const FooterLinks = styled(Box)(() => ({
    height: '30%',
    width: '100%',
    // backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}));

export const FooterList = styled(List)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    // backgroundColor: 'yellow'
}));


export const FooterSignature = styled(Box)(() => ({
    height: '30%',
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',

}));

//----------------------------HOMEPAGE-----------------------------

export const HomePageContainer = styled(Box)(() => ({
    // height: '500px',
    width: '100%',
    backgroundColor: '#0f0f0f',

}));

export const HomePageImageContainer = styled(Box)(() => ({
    // height: '100px',
    width: '100%',
    // backgroundColor: 'grey',

}));

export const HomePageImage = styled('img')(({src}) => ({
    src: `url(${src})`,
    width: '100%',
}));

export const DownloadStream = styled(Link)(() => ({
    textDecoration: 'none',
    height: '30px',
    width: '120px',
    marginTop: '20px',
    color: 'white',
    border: '1px solid white',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    color: "white",
    fontWeight: 'bold',
    fontSize: '12px',
}));

export const HomePageNavbar = styled(Box)(() => ({
    width: '100%',
    height: '70px',
    backgroundColor: 'black',
    color: 'white',
}));


export const TheHeader = styled(Typography)(() => ({
    paddng: '4px',
    fontFamily: " 'Montez', 'cursive' ",
    fontSize: '2.5em',
    color: 'white' ,
    backgroundColor: 'black' 
}));

export const ButtonLinksContainer = styled(Box)(() => ({
    width: '200px',
    height: '40px',
    backgroundColor: 'white',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    
}));

export const ButtonContainer = styled(Box)(() => ({
    width: '100%',
    height: '50px',
    // backgroundColor: 'grey',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
}));

//----------------------------CART------------------------------

export const CartContainer = styled(Box)(() => ({
    width: '100%',
    backgroundColor: '#0f0f0f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',

}));

export const CartProductContainer = styled(Box)(() => ({
    width: '70%',
    backgroundColor: 'black',
    height: '150px',
    display: 'flex',
    padding: '10px',
    border: '1px solid white'

}));

export const CartImageContainer = styled(Box)(() => ({
    width: '40%',
    // backgroundColor: 'red',
    height: '100%',
    marginRight: '30px',

}));

export const CartInfoContainer = styled(Box)(() => ({
    width: '60%',
    // backgroundColor: 'green',
    height: '100%',
    marginLeft: '15px',
    color: 'white'
}));

export const CartAmount = styled(Box)(() => ({
    height: '20px',
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
    aligntems: 'center',

}));

export const AmountButtons = styled('button')(() => ({
    width: '21px',
    height: '21px',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid grey',

}));