import React from "react";
import Form from "../../generic/forms/Form";
import CustomerFormContent from "./CustomerFormContent";
import ContactFormContent from "./ContactFormContent";

import { v4 as uuid } from "uuid";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";

const getBlankContact = () => ({ type: "", phone_number: "" });
const getBlankCustomer = () => ({ first_name: "", last_name: "" });

const Method0 = () => {
  const [customerFormValuesState, setCustomerFormValuesState] = React.useState({
    [uuid()]: getBlankCustomer(),
  });

  const [contactFormValuesState, setContactFormValuesState] = React.useState({
    [uuid()]: getBlankContact(),
  });

  const addCustomerForm = () => {
    // add a new customer to the state then set
    customerFormValuesState[uuid()] = getBlankCustomer();
    setCustomerFormValuesState(customerFormValuesState);
  };

  const addContactForm = () => {
    // add a new customer to the state then set
    contactFormValuesState[uuid()] = getBlankContact();
    setContactFormValuesState(contactFormValuesState);
  };

  const resetForms = () => {
    setContactFormValuesState({});
    setCustomerFormValuesState({});
  };

  return (
    <Form>
      <div>
        <ButtonPrimary onClick={addCustomerForm}>Add Customer+</ButtonPrimary>
      </div>

      <br />

      {Object.entries(customerFormValuesState).map(([id, customer]) => {
        return <CustomerFormContent key={id} values={customer} />;
      })}

      <br />

      <div>
        <ButtonPrimary onClick={addContactForm}>Add Contact+</ButtonPrimary>
      </div>
      <br />

      {Object.entries(contactFormValuesState).map(([id, contact]) => {
        return <ContactFormContent key={id} values={contact} />;
      })}
      <br />

      <div>
        <ButtonPrimary color="secondary" onClick={resetForms}>
          Reset Forms
        </ButtonPrimary>
      </div>
    </Form>
  );
};

export default Method0;
