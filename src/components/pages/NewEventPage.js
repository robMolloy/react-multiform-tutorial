import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";

import Title from "../generic/text/Title";
import Form from "../generic/forms/Form";
import Input from "../generic/fields/Input";
import GridItem from "../generic/grids/GridItem";
import GridContainer from "../generic/grids/GridContainer";
import Section from "../generic/sections/Section";

const Schema = yup.object().shape({
    event_name: yup
        .string()
        .required("Shtick it in my box")
        .min(3, "needs to be longer, Silad! :(")
        .max(10, "I can't handle something that big, Silad!"),
});

// const Schema = yup.object().shape({
//     event_name: yup
//         .string()
//         .min(3, "Hello Silad")
//         .max(10, "Hello Silad")
//         .required("Hello Silad"),
// });

const getDefaultFieldProps = ({ form, name }) => ({
    name,
    ref: form.register,
    helperText: form.errors?.[name]?.message,
    error: !!form.errors[name],
});

const NewEventPage = () => {
    const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });

    return (
        <Section withContainer>
            <Form>
                <Title gutterBottom underline>
                    New Event
                </Title>
                <GridContainer>
                    <GridItem xs={12} sm={6}>
                        <Input
                            {...getDefaultFieldProps({
                                form,
                                name: "event_name",
                            })}
                            label="Event Name"
                        />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <Input name="host_name" label="Host Name" />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <Input name="description" label="Description" />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <Input name="location" label="Location" />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <Input name="day" label="Day" />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <Input name="month" label="Month" />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <Input name="year" label="Year" />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <Input name="guests_qty" label="No. Of Guests" />
                    </GridItem>

                    <GridItem xs={12} sm={6}>
                        <Input name="contact_number" label="Contact Number" />
                    </GridItem>
                </GridContainer>
            </Form>
        </Section>
    );
};

export default NewEventPage;
