import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "@reach/router";
import { typeScale } from "../../utils";
import { Illustrations } from "../../assets";

import { Input, Button } from "../";

const MyInput = styled(Input)`
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: system-ui;
    font-size: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ColOne = styled.div`
  width: 60%;
  padding: 0em 2em;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const SearchWrapper = styled.div`
  padding: 1em 0em 0.7em 0em;
  display: flex;
  flex-flow: row wrap;
`;

const MyButton = styled(Button)`
  margin: 0em 0.5em;

  @media (max-width: 500px) {
    margin: 1em 0em;
    display: none;
  }
`;

const Heading = styled.div`
  font-size: ${typeScale.header1};
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-style: normal;
  line-height: 56px;
`;

const ColTwo = styled.div`
  width: 40%;
  padding: 3em 2em;

  @media (max-width: 550px) {
    display: none;
  }
`;

const SearchResult = styled.div`
  position: relative;
`;

const Result = styled.div`
  position: absolute;
  bottom: -10em;
  background-color: ${(props) => props.theme.textColor};
  width: 100%;
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 1rem;
  box-shadow: 0px 0px 19px 3px ${(props) => props.theme.boxShadow};
`;

const ResultPill = styled.div`
  padding: 1em;
`;

const PillWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Pill = styled(Link)`
  display: block;
  padding: 0.1em 1em;
  border-radius: 30px;
  margin: 0em 0.2em;
  text-decoration: none;
  width: max-content;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.textColor};
  transition: all 0.4s ease-in;

  &:hover {
    box-shadow: 0px 0px 11px 7px ${(props) => props.theme.boxShadow};
  }
`;

export const HeadingContainer = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);

  async function findResult(e) {
    setSearch(e.target.value);

      // @ts-ignore
    setData([`${Math.random()}`, `${Math.random()}`, `${Math.random()}`]);

    // try {
    //   let res = await axios.get(`/find/${e.target.value}`)
    //   setData(res.data)
    // } catch (e) {
    //   console.error("Error Occured : ", e)
    // }
  }

  return (
    <Container>
      <ColOne>
        <Heading>
          This earth was made for all beings not just human beings.
        </Heading>
        <SearchWrapper>
          <SearchResult>
            <MyInput
              type="search"
              value={search}
              onChange={findResult}
              placeholder="&times; Search any place or animal"
              autoComplete="off"
              id="search"
            />
            <Result>
              {data.map((item) => {
                return (
                  <ResultPill>
                    <div>{item}</div>
                  </ResultPill>
                );
              })}
            </Result>
          </SearchResult>
          <MyButton>Search</MyButton>
        </SearchWrapper>
        <PillWrapper>
          <Pill to="/result/dogs">Dogs</Pill>
          <Pill to="/result/birds">Birds</Pill>
          <Pill to="/result/cats">Cats</Pill>
        </PillWrapper>
      </ColOne>
      <ColTwo>
        <img src={Illustrations.BearSVG} alt="" />
      </ColTwo>
    </Container>
  );
};
