import React, { useContext } from "react";
import { BoxContainer, FormContainer, Maintext } from "./common.jsx";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext.js";


export function DashboardForm(props) {
    const { switchToSignup, switchToDashboard } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                < Maintext>Hello</Maintext>
            </FormContainer>
        </BoxContainer>
    );
}