import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, MutedLink, Input, SubmitButton, BoldLink, FieldContainer, FieldError, FormSucess, onBlur } from "./common.jsx";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext.js";
import { useFormik } from "formik";
import * as yup from "yup";
const axios = require('axios');

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const validationSchema = yup.object({
    fullName: yup.string().min(3, "Please enter Real name").required("Full name is required !"),
    email: yup.string().email("Please enter a valid email!").required(),
    password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required(),
    confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password does not match")
    }),

});

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const [success, setSuccess] = useState(null);

    const onSubmit = async (values) => {

        const { confirmPassword, ...data } = values;

        const response = await axios.post("https://run.mocky.io/v3/09940ccf-d807-4e82-85df-9568ba4074fe", data).catch((err) => {
            if (err && err.response)
                console.log("Error:", err);
        });
        if (response && response.data) {
            setSuccess(response.data.message);
        }

    };

    const formik = useFormik({
        initialValues: { fullName: "", email: "", password: "", confirmPassword: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });


    return (
        <BoxContainer>
            <FormSucess>{success ? success : ""}</FormSucess>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input name="fullName" type="text" placeholder="Full Name" value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur} >

                    </Input>
                    <FieldError>
                        {formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}
                    </FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input name="email" type="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <FieldError>
                        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                    </FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <FieldError>
                        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                    </FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <FieldError>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
                    </FieldError>
                </FieldContainer>
                <Marginer direction="vertical" margin={5} />
                <Marginer direction="vertical" margin="1.2em"></Marginer>
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1.4em"></Marginer>
            <MutedLink href="#">Already Have an account?<BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink>
            </MutedLink>

        </BoxContainer>
    );
}