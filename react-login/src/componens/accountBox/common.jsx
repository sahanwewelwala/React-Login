import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  overflow:hidden;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  margin-bottom:10px;
  text-align:center;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;
export const Maintext = styled.h1`
  text-align:center;
  font-size: 40px;
  color:#16a085;
  font-weight: 700;
 
`;

export const Input = styled.input`
  width: 258px;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin-bottom:15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px ;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(24,141,72);
background: radial-gradient(circle, rgba(24,141,72,1) 25%, rgba(241,196,15,1) 100%); 
  &:hover {
    filter: brightness(1.03);
  }
 

`;
export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
 
`;
export const FieldError = styled.span`
  color: #c0392b;
  font-size: 11px;
  min-height: 18px;
`;

export const FormSucess = styled.span`
color:green;
font-size:12px;
min-height:20px;

`;