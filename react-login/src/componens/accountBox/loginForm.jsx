import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, Input, SubmitButton ,BoldLink} from "./common.jsx";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext.js";

export function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext);

    return ( 
    <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Marginer direction="vertical" margin={5} />
            <MutedLink href="#">Forgot Your Password?</MutedLink>
            <Marginer direction="vertical" margin="1.2em"></Marginer>
            <SubmitButton type="submit">Sign In</SubmitButton>
            <Marginer direction="vertical" margin="1.4em"></Marginer>
            <MutedLink href="#">Don't Have an account?<BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
            </MutedLink>
        </FormContainer>
    </BoxContainer>
    );
}