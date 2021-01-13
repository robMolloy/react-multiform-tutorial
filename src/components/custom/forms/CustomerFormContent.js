import React from "react";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Input from "../../generic/fields/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Schema = yup.object().shape({
  first_name: yup
    .string()
    .required("Shtick it in my box")
    .min(3, "needs to be longer, Silad! :(")
    .max(10, "I can't handle something that big, Silad!"),
  last_name: yup
    .string()
    .required("Shtick it in my box")
    .min(3, "needs to be longer, Silad! :(")
    .max(10, "I can't handle something that big, Silad!"),
});

const getDefaultFieldProps = ({ form, values = {}, name }) => ({
  name,
  ref: form.register,
  helperText: form.errors?.[name]?.message,
  error: !!form.errors[name],
  defaultValue: values[name] ?? "",
});

const CustomerFormContent = (props = {}) => {
  // let id, values, formControls, setFormControls;
  // ({ id, values, formControls, setFormControls } = props);

  const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });

  return (
    <GridContainer>
      <GridItem xs={12} sm={6}>
        <Input
          label="First Name"
          {...getDefaultFieldProps({ form, name: "first_name" })}
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <Input
          label="Last Name"
          {...getDefaultFieldProps({ form, name: "last_name" })}
        />
      </GridItem>
    </GridContainer>
  );
};

export default CustomerFormContent;
