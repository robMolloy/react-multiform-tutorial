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
  // let id, values, formControls, setFormControls;
  // ({ id, values, formControls, setFormControls } = props);

  const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <Input
            label="Type"
            {...getDefaultFieldProps({ form, name: "type" })}
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <Input
            label="Phone Number"
            {...getDefaultFieldProps({ form, name: "phone_number" })}
          />
        </GridItem>
        <GridItem
          xs={12}
          // sm={3}
        >
          <ButtonRow
            array={[
              <ButtonPrimary onClick={() => form.reset()}>reset</ButtonPrimary>,
              <ButtonPrimary onClick={() => form.clearErrors()}>
                clearErrors
              </ButtonPrimary>,
              <ButtonPrimary
                onClick={() =>
                  form.setError("type", {
                    type: "manual",
                    message: "errrrrrrooooooooaaaaarrrrr!",
                  })
                }
              >
                setError
              </ButtonPrimary>,
              <ButtonPrimary onClick={() => console.log(form.errors)}>
                errors
              </ButtonPrimary>,
              <ButtonPrimary onClick={async () => await form.trigger()}>
                trigger
              </ButtonPrimary>,
              <ButtonPrimary
                onClick={async () => await form.setValue("type", "mobile")}
              >
                setValue
              </ButtonPrimary>,
              <ButtonPrimary onClick={() => console.log(form.getValues())}>
                getValues
              </ButtonPrimary>,
            ]}
          />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default ContactFormContent;
