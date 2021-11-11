import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Link } from "@reach/router";
import { Illustrations } from "../assets";

import axios from "axios";

import { AiFillHeart } from "react-icons/ai";

import { Nav, Load, Footer, Modal } from "../components";

interface Props {
    path?: string;
    search?: string;
    useDarkTheme: any;
    setUseDarkTheme: any;
}

const Container = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Heading = styled.h1`
    text-align: center;
    font-weight: 100;
    color: lightgrey;
`;

const SubHeading = styled.h2`
    text-align: center;
    font-weight: 100;
    color: lightgrey;
`;

const Wrapper = styled.div`
    padding: 0em 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
`;

const FilterContainer = styled.form`
    padding: 0.8em 0.5em 0em 0.5em;
`;

const FilterCard = styled.fieldset`
    background: ${(props) => props.theme.color};
    padding: 2rem 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    border: none;
    box-shadow: 0px 0px 3px 0px ${(props) => props.theme.boxShadow};
`;

const Legend = styled.legend`
    padding: 0.3em 1em;
    border-radius: 8px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border: 2px solid #eee;
    font-weight: 700;
`;

const Row = styled.div`
    display: inline-flex;
    padding: 1em;
    width: 100%;
`;

const RowDesc = styled.label`
    color: ${(props) => props.theme.textColor};
    margin: 0em 1em;
    font-weight: 400;
`;
const Card = styled(Link)`
    text-decoration: none;
    display: block;
    height: auto;
    background-color: white;
    border-radius: 8px;
    padding: 1em;
    display: block;
    margin: 1em;
    place-items: center;
    box-shadow: none;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: box-shadow 0.3s linear;

    &:hover {
        box-shadow: 0px 0px 43px 1px ${(props) => props.theme.boxShadow};
        background-color: ${(props) => props.theme.color};
    }
`;

const CardImage = styled.div``;

const Image = styled.img``;

const CardBody = styled.div`
    position: relative;
    padding: 1em 0em;
`;

const Rating = styled.div`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    display: inline-flex;
    place-items: center;
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
`;

const Shop = styled.div`
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
`;

const Timing = styled.div`
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
`;

const Heart = styled(AiFillHeart)`
    color: ${(props) => props.theme.textColor};
    margin: 0em 0.5em;
`;

// dummy Data
const dummyData = [
    {
        _id: 1,
        shopName: "Pets Care",
        image: "anything",
        timing: "3:50AM - 10:50PM",
        rating: 4,
    },
    {
        _id: 2,
        shopName: "Animal Love",
        image: "kuch bhii",
        timing: "3:50AM - 10:50PM",
        rating: 3,
    },
    {
        _id: 1,
        shopName: "Pets Care",
        image: "anything",
        timing: "3:50AM - 10:50PM",
        rating: 4,
    },
    {
        _id: 2,
        shopName: "Animal Love",
        image: "kuch bhii",
        timing: "3:50AM - 10:50PM",
        rating: 3,
    },
];

const Filter: React.FC<{ idName: string, label: string }> = ({ idName, label }) => { 
    return (
        <>
            <Row>
                <input type="checkbox" id={idName} />
                <RowDesc htmlFor={idName}>{label}</RowDesc>
            </Row>
        </>
    );
};

export const Result: React.FC<Props> = (props) => {
    const [result, setResult] = useState<any[]>([]);
    const [species, setSpecies] = useState<any[]>([])

    async function fetchInfo(item) {
        try {
            /*let res = await axios({
                url: "http://localhost:8000/",
                method: "GET",
                params: {
                    searchString: item
                },
            })
            if(res?.status === 200) {
                setResult(res.data)
            }*/
            setTimeout(() => {
                setResult(dummyData);
            }, 1000);
        } catch (e) {
            console.error("Error Occured while fetching the info : ", e);
        }
    }

    async function fetchSpecies () {
        try {
            let res = await axios({
                method: "GET",
                url: "https://services2.arcgis.com/S8zZg9pg23JUEexQ/arcgis/rest/services/Bird_Species/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
            })
            if(res) {
                // @ts-ignore
                console.log(res.data.fields)
                // @ts-ignore
                setSpecies(res.data.fields) 
            }
        } catch (e) {
            console.error("Error occured while getting the species : ", e) 
        }
    }

    useEffect(() => {
        // ...
        console.log(props);
        // @ts-ignore
        fetchInfo(props?.search);
        fetchSpecies()
    }, []);

    return (
        <>
            {result.length === 0 ? (
                <Load />
            ) : (
                <Container>
                    <Nav
                        useDarkTheme={props.useDarkTheme}
                        setUseDarkTheme={props.setUseDarkTheme}
                    />
                    <Main>
                        <FilterContainer>
                            <FilterCard>
                                <Legend>Species</Legend>
                                <Row>
                                    <input type="checkbox" id="name" />
                                    <RowDesc htmlFor="name">
                                        House Sparrow
                                    </RowDesc>
                                </Row>
                                <Row>
                                    <input type="checkbox" id="name" />
                                    <RowDesc htmlFor="name">Mallard</RowDesc>
                                </Row>
                                {species.map(item => {
                                    return <Filter idName={item} label={item.alias} />
                                })}
                            </FilterCard>
                            <FilterCard>
                                <Legend>Timing</Legend>
                                <Row>
                                    <input type="checkbox" id="name" />
                                    <RowDesc htmlFor="name">3:00 PM</RowDesc>
                                </Row>
                                <Row>
                                    <input type="checkbox" id="name" />
                                    <RowDesc htmlFor="name">5: 00 PM</RowDesc>
                                </Row>
                                <Row>
                                    <input type="checkbox" id="name" />
                                    <RowDesc htmlFor="name">8: 00 PM</RowDesc>
                                </Row>
                            </FilterCard>
                        </FilterContainer>
                        <Wrapper>
                            {result.map((item) => {
                                return (
                                    <Card to="/result/shop/petCare">
                                        <CardImage>
                                            <Image
                                                src={Illustrations.Dog}
                                                alt=""
                                            />
                                        </CardImage>
                                        <CardBody>
                                            <Shop>{item.shopName}</Shop>
                                            <Timing>{item.timing}</Timing>
                                            <Rating>
                                                <div>{item.rating}</div>
                                                <Heart size="1.5em" />
                                            </Rating>
                                        </CardBody>
                                    </Card>
                                );
                            })}
                        </Wrapper>
                    </Main>
                    <Footer />
                </Container>
            )}
        </>
    );
};
