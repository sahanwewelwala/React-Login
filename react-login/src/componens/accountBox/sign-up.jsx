import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, Input, SubmitButton ,BoldLink} from "./common.jsx";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext.js"; 

export function SignupForm(props) {
    const {switchToSignin} = useContext(AccountContext);
    return ( 
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <Marginer direction="vertical" margin={5} />
            <Marginer direction="vertical" margin="1.2em"></Marginer>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <Marginer direction="vertical" margin="1.4em"></Marginer>
            <MutedLink href="#">Don't Have an account?<BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink>
            </MutedLink>
        </FormContainer>
    </BoxContainer>
    );
}