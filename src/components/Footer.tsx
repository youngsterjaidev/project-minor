import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";

const Cotnainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.textColor};
  padding: 1em 2em;

  @media (max-width: 500px) {
    padding: 1em 0.5em;
  }
`;

const Header = styled.div`
  width: 20%;
  color: ${props => props.theme.textColor};
`;

const Heading = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: ${typeScale.header5};
  line-height: 28px;
  margin: 0;
  color: ${props => props.theme.textColor};
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: ${typeScale.header1};
  line-height: 56px;
  color: ${props => props.theme.textColor};
  margin: 0;
`;

export const Footer = () => {
  return (
    <Cotnainer>
      <Header>
        <Heading>Apis</Heading>
        <hr />
        <Title>Find the best care taker for your pest</Title>
      </Header>
    </Cotnainer>
  );
};
