import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";

export const Input = styled.input`
  padding: 1em 2em;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.textColor};

  &:focus {
    outline: 2px solid ${(props) => props.theme.outline};
    outline-offset: 0.5px;
    border: 1px solid transparent;
  }
`;

export const Button = styled.button`
  padding: 0.8em;
  font-size: ${typeScale.paragraph};
  min-width: 150px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 19px 0px ${(props) => props.theme.boxShadow};
  background: ${(props) => {
    console.log(props.theme);
    return props.theme.primaryColor;
  }};
  color: ${(props) => props.theme.textColorOnPrimary};
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.1s linear, color 0.1s linear,
    box-shadow 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    box-shadow: 0px 0px 5px 1px ${(props) => props.theme.boxShadow};
  }

  &:disabled {
    background-color: #373737;
    cursor: not-allowed;
  }
`;
