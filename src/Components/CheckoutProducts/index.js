import React from "react";

export const CheckoutProducts = (props) => {
  const { id, name, image, price, discount } = props.data;
  return (
    <div>
      <p style={{ color: "green" }}>
        products = {image} -- {name} -- {price}
      </p>
    </div>
  );
};
