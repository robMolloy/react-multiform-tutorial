import React from "react";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import GridContainer from "../../generic/grids/GridContainer";
import ButtonRow from "../../generic/grids/ButtonRow";
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
  // id, formControls, setFormControls;
  // id, , formControls, setFormControls

  let values;
  ({ values = {} } = props);

  const form = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
    defaultValues: values,
  });

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <Input
            label="First Name"
            {...getDefaultFieldProps({ form, values, name: "first_name" })}
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <Input
            label="Last Name"
            {...getDefaultFieldProps({ form, values, name: "last_name" })}
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
                  form.setError("first_name", {
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
                onClick={async () => await form.setValue("first_name", "silad")}
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

export default CustomerFormContent;
