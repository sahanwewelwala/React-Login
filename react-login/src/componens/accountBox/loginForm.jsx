import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, MutedLink, Input, SubmitButton, BoldLink, FieldContainer, FieldError, FormError } from "./common.jsx";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext.js";
import { useFormik } from "formik";
import * as yup from "yup";
import { App } from "./accountContext.js";
const axios = require('axios');

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
})

export function LoginForm(props) {
    const { switchToSignup, switchToDashboard } = useContext(AccountContext);
    const [error, setError] = useState(null);
    const onSubmit = async (values) => {
        setError(null);
        const response = await axios.post("http://12acc687-c501-47c5-9aac-757cd3249cbc.mock.pstmn.io/loggin", values).catch((err) => {
            if (err && err.response)
                setError();
        });
        if (response) {
            if (response.data.Username === "Admin1" && response.data.Password === "root") {
                switchToDashboard();
            }
            setError(response.data.message)


        }
    };
    const formik = useFormik({ initialValues: { email: "", password: "" }, validateOnBlur: true, onSubmit, validationSchema: validationSchema })
    return (
        <BoxContainer>
            <FormError>{error ? error : ""}</FormError>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input name="email" type="text" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {<FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>}
                </FieldContainer>
                <FieldContainer>
                    <Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {<FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>}
                </FieldContainer>
                <Marginer direction="vertical" margin={5} />

                <MutedLink href="#">Forgot Your Password?</MutedLink>
                <Marginer direction="vertical" margin="1.2em"></Marginer>
                <SubmitButton type="submit" disabled={!formik.isValid}   >Sign In</SubmitButton>

                <Marginer direction="vertical" margin="1.4em"></Marginer>
                <MutedLink href="#">Don't Have an account?<BoldLink href='#' onClick={switchToSignup}>Sign Up</BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>
    );
}