import React from "react";
import styled from "styled-components";
import { typeScale } from "../../utils";
import { Illustrations } from "../../assets";

import { Button } from "../";

const MyButton = styled(Button)`
  background: #fff;
  color: #000;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  display: grid;
  place-items: center;
  background: url(${Illustrations.Dog}) no-repeat;
  background-size: cover;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: ${typeScale.header1};
  color: #fff;
  line-height: 56px;
`;

export const ImageContainer = () => {
  return (
    <Container>
      <div>
        <Heading>Find the care Taker for you Besti</Heading>
        <Wrapper>
          <MyButton>Know More</MyButton>
        </Wrapper>
      </div>
    </Container>
  );
};
