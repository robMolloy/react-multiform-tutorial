import React from "react";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Input from "../../generic/fields/Input";

const CustomerFormContent = (props = {}) => {
  // let id, values, formControls, setFormControls;
  // ({ id, values, formControls, setFormControls } = props);

  return (
    <GridContainer>
      <GridItem xs={12} sm={6}>
        <Input label="First Name" />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <Input label="Last Name" />
      </GridItem>
    </GridContainer>
  );
};

export default CustomerFormContent;
