import React from "react";
import { FormInputContainer, MyInputFields, Labels } from "../../Styles";

export const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <FormInputContainer>
      <Labels>{label}</Labels>
      <MyInputFields {...inputProps} onChange={onChange} />
    </FormInputContainer>
  );
};
