import React from "react";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import ButtonRow from "../../generic/grids/ButtonRow";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Input from "../../generic/fields/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";

const Schema = yup.object().shape({
  type: yup
    .string()
    .required("Shtick it in my box")
    .oneOf(["landline", "mobile"]),
  phone_number: yup
    .string()
    .required("Phone number is a required field")
    .phone("", false, "Must be a valid phone number"),
});

const getDefaultFieldProps = ({ form, name }) => ({
  name,
  ref: form.register,
  helperText: form.errors?.[name]?.message,
  error: !!form.errors[name],
});

const ContactFormContent = (props = {}) => {
  let values, id, formControls, setFormControls;
  ({ id, formControls = {}, setFormControls, values = {} } = props);

  const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });

  React.useEffect(() => {
    formControls[id] = form;
    setFormControls(formControls);
  }, []);
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <Input
            label="Type"
            {...getDefaultFieldProps({ form, values, name: "type" })}
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <Input
            label="Phone Number"
            {...getDefaultFieldProps({ form, values, name: "phone_number" })}
          />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default ContactFormContent;
