import React from "react";
import styled from "styled-components";

//스타일 컴포넌트
const LoginStyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.color === "on" ? "#36f" : "lightgrey")};
  height: 54px;
  border: none;
  border-radius: 27px;
  margin-top: 20px;
`;

const SignUpStyledButton = styled.button`
  color: white;
  width: 94%;
  background-color: #f2f4f7;
  border: 1px solid #e1e2e3;
  height: 54px;
  border-radius: 27px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  position: sticky;
  z-index: 9;
  bottom: 0;
  margin-left: 15px;
  background-color: ${(props) => (props.color ? "lightblue" : "lightgrey")};
`;

const PhoneButton = styled.button`
  height: 54px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.color === "off" ? "none" : "lightblue"};
  border: none;
  width: 30%;
  margin-left: 10px;
`;

const PasswordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.color === "off" ? "lightgrey" : "#36f"};
  height: 54px;
  border: none;
  border-radius: 27px;
  margin-bottom: 150px;
`;

export { LoginStyledButton, SignUpStyledButton, PhoneButton, PasswordButton };
