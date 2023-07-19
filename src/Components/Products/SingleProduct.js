import React from "react";
import {
  CartAmount,
  ProductImage,
  ProductInfo,
  SingleProductContainer,
  SingleProductImageContainer,
  TypographyLato,
} from "../../Styles";
import { Box, Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export const SingleProduct = (props) => {
  const { id, name, image, price, discount } = props.data;

  const { addToCart, cartItems } = useContext(CartContext);
  return (
    <SingleProductContainer>
      <SingleProductImageContainer>
        <ProductImage src={image} />
      </SingleProductImageContainer>
      <Divider sx={{ backgroundColor: "grey", marginBottom: "15px" }} />
      <ProductInfo>
        <TypographyLato sx={{ fontSize: "12px" }}>{name}</TypographyLato>
        <TypographyLato sx={{ fontSize: "12px", fontWeight: "bold" }}>
          ${price}
        </TypographyLato>
      </ProductInfo>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          onClick={() => addToCart(id)}
        >
          <ShoppingCartIcon />
        </Link>
        <Box>
          {cartItems[id] > 0 && <CartAmount>({cartItems[id]})</CartAmount>}
        </Box>
      </Box>
    </SingleProductContainer>
  );
};
