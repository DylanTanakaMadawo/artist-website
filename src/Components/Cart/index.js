import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Box, Container } from "@mui/material";
import { PRODUCTS } from "../Data";
import { CartItem } from "./CartItem";
import { TypographyLato, DownloadStream } from "../../Styles";
import { HomeMerch } from "../HomeMerch";

import { useNavigate } from "react-router-dom";
import { CheckoutProducts } from "../CheckoutProducts";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        margin: "20px",
        height: "100%",
      }}
    >
      <Container>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <>
                <CartItem data={product} />
                {/* <CheckoutProducts data={product} /> */}
              </>
            );
          }
        })}
      </Container>
      {totalAmount > 0 ? (
        <>
          <Container
            sx={{
              marginTop: "20px",
              color: "white",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TypographyLato>Subtotal : </TypographyLato>
              <TypographyLato sx={{ fontWeight: "bold" }}>
                ${totalAmount}
              </TypographyLato>
            </Box>
            <div className="cart-btns">
              <DownloadStream to="/placeorder">Place Order</DownloadStream>
              <DownloadStream to="/merch">Continue Shopping</DownloadStream>
            </div>
          </Container>
          {/* <DownloadStream
                        onClick={() => {totalAmount = 0}}
                    >Clear Cart</DownloadStream> */}
        </>
      ) : (
        <div style={{ height: "200px" }}>
          <HomeMerch />
          <h1 style={{ color: "white" }}>CART IS EMPTY</h1>
        </div>
      )}
    </Container>
  );
};
