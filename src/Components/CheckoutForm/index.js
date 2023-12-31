import React, { useState, useRef } from "react";
import { FormContainer, FormHouse, SubmitButton } from "../../Styles";
import { FormInput } from "./FormInput";

export const CheckoutForm = () => {
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    PhysicalAddress: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 2,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 3,
      name: "physicalAddress",
      type: "text",
      placeholder: "Physical Address",
      label: "Physical Address",
    },
  ];

  console.log(values);

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
    <FormContainer>
      <FormHouse>
        <form onSubmit={sendEmail}>
          <h1>Fill in Below: </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <SubmitButton>SUBMIT</SubmitButton>
        </form>
      </FormHouse>
    </FormContainer>
  );
};
