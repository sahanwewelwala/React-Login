import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { SignupForm } from "./sign-up";
import { AccountContext } from "./accountContext";


const BoxContainer = styled.div`
width: 300px;
min-height: 720px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
margin:0;
`;
const TopConatiner = styled.div`
width:100%;
height: 180px;
position:absolute;
display: flex;
flex-direction:column;
justify-content:flex-end;
padding:0 1.8em;
padding-botttom:5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform : rotate(150deg);
  top: -290px;
  left: -180px;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 50%, rgba(253,187,45,1) 100%); 
`;
const HeaderContainer = styled.div`
  margin-top:-80px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`

  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin:0
  

`;
const SmallText = styled.h5`
color:#fff;
font-weight:500;
font-size:11px;
z-index:10;
margin:0;
`;

const InnerContainer = styled.div`
  margin-top:250px;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding 10px;
 
`;
const backdropVariants = {
  expanded:{
    width:"233%",
    height: "1250px",
    borderRadius:"20%",
    Transform:"rotate(60deg)",

  },
  collapsed:{
    width:"160%",
    height: "550px",
    borderRadius:"50%",
    Transform:"rotate(60deg)",
  },
};

const expandingTransition={
  type:"spring",
  duration:2.3,
  stiffness: 30,
}
export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const[active,setActive] = useState("signin");

  const playExpandingAnimation = () =>{
    setExpanded(true);

    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration *1000 - 1500);
  } 
  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    },400 );
  }
  const switchToSignin = () =>{
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    },400 );
  }
  const contextValue = { switchToSignup,switchToSignin  };
  return (
  <AccountContext.Provider value={contextValue}>
  <BoxContainer>
    <TopConatiner>
      <BackDrop initial={false} animate={isExpanded ? "expanded":"collapsed"} variants={backdropVariants} 
      transition={expandingTransition}
      />
      {active === "signin" && <HeaderContainer>
        <HeaderText>Welcome </HeaderText>
        <HeaderText> Back</HeaderText>
        <SmallText>Sign in to Continue !</SmallText>
      </HeaderContainer>}
      {active === "signup" && <HeaderContainer>
        <HeaderText>Create </HeaderText>
        <HeaderText> Account</HeaderText>
        <SmallText>Sign up to Continue !</SmallText>
      </HeaderContainer>}
    </TopConatiner>
    <InnerContainer>
      {active === "signin" && <LoginForm/>}
      {active === "signup" && <SignupForm/>}
    </InnerContainer>
  </BoxContainer>
  </AccountContext.Provider>
  );
}