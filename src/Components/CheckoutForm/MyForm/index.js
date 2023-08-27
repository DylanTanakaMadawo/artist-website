import { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

import { PRODUCTS } from "../../Data";
import { Divider } from "@mui/material";
import { useState } from "react";

export const MyForm = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const [user_name, setUsername] = useState("");
  const [user_surname, setUsersurname] = useState("");
  const [user_email, setUseremail] = useState("");
  const [message, setMessage] = useState("");

  let ordered_products = "";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const emailContent = {
      user_name: user_name,
      user_surname: user_surname,
      user_email: user_email,
      message: message,
      ordered_products: ordered_products,
      totalAmount: totalAmount,
    };

    emailjs
      .send(
        "service_fuzvw03",
        "template_gv4220m",
        // form.current,
        emailContent,
        "7-QExdKo3fcylX58Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {/* <h1 className="form-header">Fill The Form</h1> */}

      <div className="form-container">
        <div className="products-section">
          <h1>Your Products</h1>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <>
                  <p className="final-prod">
                    {cartItems[product.id]} x {product.name} - ${product.price}
                  </p>
                  <img src={product.image} style={{ width: "30%" }} />
                  <Divider />
                </>
              );
            }
          })}
          <h2 style={{ color: "black", fontWeight: "bold" }}>
            Total Amount - ${totalAmount}
          </h2>
        </div>
        <div className="form-house">
          <h1>Fill Form Below</h1>
          <form className="my-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                ordered_products += `${cartItems[product.id]}x${
                  product.name
                }_$${product.price} \n`;
                console.log(ordered_products);
                return (
                  <>
                    <input className="products-input" type="text" />
                  </>
                );
              }
            })}

            <input
              type="text"
              placeholder="Surname"
              // name="user_surname"
              onChange={(e) => setUsersurname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              // name="user_email"
              onChange={(e) => setUseremail(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter Physical Address"
              // name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
