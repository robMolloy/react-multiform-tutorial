import React from "react";
import Section from "../generic/sections/Section";
import MultiForm from "../custom/forms/Multiform";
import Title from "../generic/text/Title";
import Br from "../generic/text/Br";

const Test1 = () => {
  return (
    <Section withContainer>
      <Title underline>Household details</Title>
      <Br />
      <MultiForm />
    </Section>
  );
};

export default Test1;
