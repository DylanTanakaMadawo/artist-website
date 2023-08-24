import { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

export const MyForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuzvw03",
        "template_gv4220m",
        form.current,
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
      <h1 className="form-header">Fill The Form</h1>
      <div className="form-container">
        <div className="form-house">
          <form className="my-form" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input
              type="text"
              placeholder="Surname"
              name="user_surname"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Enter Physical Address"
              name="message"
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
