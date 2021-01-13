import React from "react";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Input from "../../generic/fields/Input";

const ContactFormContent = (props = {}) => {
  // let id, values, formControls, setFormControls;
  // ({ id, values, formControls, setFormControls } = props);

  return (
    <GridContainer>
      <GridItem xs={12} sm={6}>
        <Input label="Type" />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <Input label="Phone Number" />
      </GridItem>
    </GridContainer>
  );
};

export default ContactFormContent;
